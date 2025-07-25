import { api_java } from '@/lib/api'
import { UserResponse,User } from '@/types/user'

export const getUsers = async (): Promise<UserResponse[]> => {
  const response = await api_java.get('/user/userslist')
  return response.data
}

// export const getUserById = async (id: string): Promise<User> => {
//   const response = await api.get(`/users/${id}`)
//   return response.data
// }

export const createUser = async (data: Partial<User>): Promise<User> => {
  const response = await api_java.post('/user/register', data)
  return response.data
}
