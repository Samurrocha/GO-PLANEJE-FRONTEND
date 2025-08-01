import {User} from "./user";

export type AuthRequest = Omit<User, 'createdAt' | 'id' | 'userName'>;

export interface AuthResponse {
  token: string;
}
