
import { Box, TextField, Autocomplete } from '@mui/material';
import {useCountries} from '@/features/countries/hooks/useCountries'

type SelectCountryProps = {
    label?: string;
  };

export default function SelectCountry({ label }: SelectCountryProps) {
    let countries_name

    const { data: countries, isLoading, error } = useCountries()
      if (isLoading) return <p>Carregando...</p>
      if (error) return <p>Erro ao carregar usuários.</p>

      if (countries && !error){
        countries_name = countries.map(country => country.name.common);

        countries_name = countries_name.sort((a, b) => a.localeCompare(b));
      }else{
        countries_name = ['Brazil']
      }

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ 
                width: 300,
                padding: 0,
                margin: 0,            
            }}
            options={countries_name}
            autoHighlight
            getOptionLabel={(option)=> option}
            renderOption={(props, option) => {
                return (
                    <Box
                        component="li"
                    >
                        {option}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        },
                    }}
                />
            )}
        />
    )
}