'use client'

import { useCountries } from '../hooks/useCountries'

export const CountryList = () => {
  const { data: countries, isLoading, error } = useCountries()
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar usuários.</p>

  return (

    <>
        {
            countries?.map(country => (
                <li key={country.name.common}>{country.name.common}</li>
            ))
        }
    </>
    // <ul>
    //   {users?.map(user => (
    //     <li key={user.id}>{user.name}</li>
    //   ))}
    // </ul>
  )
}
