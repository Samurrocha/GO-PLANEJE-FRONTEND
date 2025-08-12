import { api_java } from '@/lib/api'
import { AuthRequest, AuthResponse, AuthError } from '../types/auth'

export const loginUser = async (data: AuthRequest): Promise<AuthResponse | AuthError | null> => {
  try {
    const response = await api_java.post('/auth/login', data)

    if (response) return response.data

    return null
  }
  catch (e) {
    console.log("Erro ao autenticar usuário : \n", e);
    return null
  }
}