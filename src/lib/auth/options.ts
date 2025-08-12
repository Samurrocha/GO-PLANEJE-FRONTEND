import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '@/features/auth/services/authService'
import jwt from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'
import { User, Session } from 'next-auth'

export const authOptions = {
  providers: [

    // Login via Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },

      // Login via sua API Java
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const response = await loginUser({ email: credentials.email, password: credentials.password });

        if (response && 'token' in response && response.token) {
          const validatedUser = jwt.verify(response.token, process.env.JWT_SECRET!);

          if (validatedUser && typeof validatedUser !== 'string' && 'sub' in validatedUser && 'email' in validatedUser) {
            const user: User = {
              id: 'validatedUser.sub',
              email: validatedUser.email,

            };

            return user
          }

        }
        return null
      }

    }),
  ],

pages: {
  signIn: "/login",
  },


callbackify: {
    async jwt({ token, user } : { token: JWT, user?: User }) {
    if (user) {
      token.email = user.email
      token.id = user.id

      // Se o seu usuário tem um accessToken externo (ex: da sua API Java),
      // if (user.token) {
      //   token.accessToken = (user as any).token;
      // }
    }
    return token
  },

    async session({ session, token } : { session: any, token: JWT }) {
    if (token) {
      session.user = {
        email: token.email,
        id: token.id
      }

      //session.accessToken = token.accessToken; // Se você armazenou o accessToken no token JWT


      return session
    }
  }
},



secret: process.env.NEXTAUTH_SECRET,
}
