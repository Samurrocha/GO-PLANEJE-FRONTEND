// //import { useState, useEffect } from 'react';
// import axios from 'axios';

// type Currency = {
//   code: string;
//   name: string;
//   symbol: string;
// };

// type Country = {
//   name: string;
//   capital: string;
//   population: number;
//   currencies: Currency[];
//   languages: any[];
//   timezones: string[];
// };

// export default async function UseCountries(): Promise<Country[]> {
//   const response = await axios.get<Country[]>(
//     "https://country-state-city-search-rest-api.p.rapidapi.com/allcountries",
//     {
//       headers: {
//         'x-rapidapi-key': '65b4bd5528msh8888185f37558a2p1da3cajsn5537b8c04eeb',
//         'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
//       }
//     }
//   );

//   if (response.status !== 200) {
//     throw new Error("Failed to fetch countries");
//   }
//   return response.data;
// }
