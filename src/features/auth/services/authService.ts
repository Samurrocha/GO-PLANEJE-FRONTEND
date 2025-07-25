import { api } from '@/lib/api'
import { Auth } from '@/types/auth'
import { User } from '@/types/user'

export const loginUser = async (data: Auth): Promise<User> => {
  const response = await api.post('/auth/login', data)
  return response.data
}
