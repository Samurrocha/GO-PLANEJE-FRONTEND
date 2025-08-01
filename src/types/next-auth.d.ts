// src/types/next-auth.d.ts (ou onde você colocou isso)
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}
