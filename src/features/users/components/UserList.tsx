'use client'

import { useUsers } from '../hooks/useUsers'

export const UserList = () => {
  const { data: users, isLoading, error } = useUsers()
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar usuários.</p>

  return (

    <>
        <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
    // <ul>
    //   {users?.map(user => (
    //     <li key={user.id}>{user.name}</li>
    //   ))}
    // </ul>
  )
}
