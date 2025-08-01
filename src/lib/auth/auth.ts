// lib/auth.ts
import NextAuth from "next-auth";
import { authOptions } from "./options"; // ou o caminho correto

export const { auth } = NextAuth(authOptions);
