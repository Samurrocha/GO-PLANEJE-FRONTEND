import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '../services/countryService'

 export const useCountries = () => {
  return useQuery({queryKey: ['countries'], queryFn: fetchCountries})
}