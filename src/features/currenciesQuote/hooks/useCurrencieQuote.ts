import { useQuery } from '@tanstack/react-query'
import { fetchCurrenciesQuote } from '../services/currenciesQuoteService'

 export const useCurrenciesQuote = (fromCurrencie: string, toCurrencie: string) => {
  return useQuery({queryKey: ['currenciesQuote', fromCurrencie, toCurrencie], queryFn: () => fetchCurrenciesQuote(fromCurrencie, toCurrencie)})
}