import {User} from "../../../types/user";

export type AuthRequest = Omit<User, 'createdAt' | 'id' | 'userName'>;

export interface AuthResponse {
  token: string|null;
}

export interface AuthError {
  status: number;
  message: string;
  timestamp: string;
}
