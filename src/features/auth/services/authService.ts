import { api_java } from '@/lib/api'
import { AuthRequest, AuthResponse } from '@/types/auth'

export const loginUser = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await api_java.post('/auth/login', data)
  return response.data
}
