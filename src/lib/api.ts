import axios from 'axios'


export const api_java = axios.create({
  
  baseURL: process.env.NEXT_PUBLIC_JAVA_API_URL, // configure no .env
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api_countries = axios.create({
  
  baseURL: process.env.NEXT_PUBLIC_COUNTRIES_API_URL, // configure no .env
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api_currencies_quote = axios.create({
  
  baseURL: process.env.NEXT_PUBLIC_CURRENCIES_QUOTE_API_URL, // configure no .env
  headers: {
    'Content-Type': 'application/json',
  },
})