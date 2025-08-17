import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '@/features/auth/services/authService'
import { jwtDecode } from 'jwt-decode'
import { AuthSession, JwtPayload, AuthUser, AuthJWT } from '@/features/auth/types/auth'

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

        try {
          const response = await loginUser({
            email: credentials.email,
            password: credentials.password,
          });

          if (!response || !('acessToken' in response)|| !('refreshToken' in response)) return null;

          const validatedUser = jwtDecode<JwtPayload>(response.acessToken);

          if (!validatedUser?.sub) return null;

          const user: AuthUser = {
            id: validatedUser.sub,
            email: validatedUser.email,
            name: validatedUser.username || null,
            role: validatedUser.role,
            exp: validatedUser.exp,
            refreshToken: response.refreshToken
          };

          return user;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      }

    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbackify: {
    async jwt({ token, user }: { token: AuthJWT, user?: AuthUser }) {
      if (user) {
        token.sub = user.id
        token.email = user.email
        token.name = user.name ? user.name : null
        token.role = user.role
        token.refreshToken = user.refreshToken
        token.exp = user.exp

        // Se o seu usuário tem um accessToken externo (ex: da sua API Java),
        // if (user.token) {
        //   token.accessToken = (user as any).token;
        // }
      }
      return token
    },

    async session({ session, token }: { session: AuthSession, token: AuthJWT }) {
      if (token) {
        session.user = {
          id: token.sub ? token.sub : '',
          email: token.email,
          name: token.name,
          role: token.role,
          refreshToken: token.refreshToken,
          exp: token.exp
        }
      }

      //session.accessToken = token.accessToken; // Se você armazenou o accessToken no token JWT

      return session
    }

  },

  secret: process.env.NEXTAUTH_SECRET,

}