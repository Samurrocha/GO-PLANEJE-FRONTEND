import { JWT } from "next-auth/jwt";
import { User as UserModel } from "../../../types/user";
import { User, Session } from 'next-auth'


export type AuthRequest = Omit<UserModel, 'createdAt' | 'id' | 'userName'>;

export interface AuthResponse {
  acessToken: string
  refreshToken: string
}

export interface AuthError {
  status: number;
  message: string;
  timestamp: string;
}

export interface JwtPayload {
  sub: string,
  email: string,
  role: string,
  username?: string,
  iat: number,
  exp: number
}

export interface AuthUser extends User {
  role: string
  exp: number
  refreshToken: string

}

export interface AuthSession extends Session {
  user: Session["user"] & { role: string, exp: number, refreshToken: string };
}

export interface AuthJWT extends JWT {
  role: string
  exp: number
  refreshToken: string
}