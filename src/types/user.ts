export interface User {
    'id': string;
    'userName'?: string;
    'email': string;
    'password': string;
    'createdAt': Date
}

export type UserResponse = Omit<User, "password">;