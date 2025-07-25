import {api_currencies_quote } from '@/lib/api';

export interface Currency{
    "high": string;
    "low": string;
    "create_date": Date;
};

export const fetchCurrenciesQuote = async (fromCurrencie: string, toCurrencie: string): Promise<Currency[]> => {

  const response = await api_currencies_quote.get<Currency[]>(`/${fromCurrencie}-${toCurrencie}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch currencies");
  }

  return response.data;
}