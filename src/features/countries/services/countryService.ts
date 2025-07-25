import axios from 'axios';
import { api_countries, api_currencies_quote } from '@/lib/api';

type Currency = {
    [currencieCode: string]: {
        name: string,
        symbol: string
    }
}

type Name = {
    common: string;
    official: string;
};

interface Country {
    name: Name;
    currencies: Currency;
}

export const fetchCountries = async (): Promise<Country[]> => {

    const response = await api_countries.get<Country[]>('/all?fields=currencies,name');

    if (response.status !== 200) {
        throw new Error("Failed to fetch countries");
    }

    return response.data;
}

export const fetchCurrenciesQuote = async (fromCurrencie: string, toCurrencie: string): Promise<Currency[]> => {

    const response = await api_currencies_quote.get<Currency[]>(`/${fromCurrencie}-${toCurrencie}`);

    if (response.status !== 200) {
        throw new Error("Failed to fetch currencies");
    }

    return response.data;
}