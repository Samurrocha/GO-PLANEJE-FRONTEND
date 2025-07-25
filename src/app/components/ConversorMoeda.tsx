"use client";
import { useEffect, useState } from "react";
import {
    TextField,
    MenuItem,
    Grid,
    InputAdornment,
    Typography,
    Box,
    IconButton,
    Autocomplete,
    CircularProgress
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import axios from "axios";
import { useCurrenciesQuote } from "@/features/currenciesQuote/hooks/useCurrencieQuote";
import { useCountries } from "@/features/countries/hooks/useCountries";



const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("BRL");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currenciesList, setCurrenciesList] = useState<string[]>([]);

    const { data: countries, isLoading: isLoadingCountries, error: countriesError } = useCountries()
    const { data: currenciesQuote, isLoading: isLoadingCurrencies, error: currenciesQuoteError } = useCurrenciesQuote(fromCurrency, toCurrency)


    useEffect(() => {
        if (countries) {
            const currencyCodes = Array.from(
                new Set(
                    countries
                        .map((country) => Object.keys(country.currencies)[0])
                        .filter(Boolean)
                )
            );

            setCurrenciesList(currencyCodes);
        }
    }, [countries]);

    useEffect(() => {
        if (
            amount &&
            fromCurrency &&
            toCurrency &&
            currenciesQuote &&
            currenciesQuote.length > 0
        ) {
            const high = parseFloat(currenciesQuote[0].high);
            const low = parseFloat(currenciesQuote[0].low);
            const rate = (high + low) / 2;

            setConvertedAmount(parseFloat((amount * rate).toFixed(2)));
        } else if (currenciesQuoteError) {
            const timer = setTimeout(() => {

                // Opção 1: recarregar a página
                // window.location.reload();

                // Opção 2: resetar as moedas para algum valor padrão
                setFromCurrency("USD");
                setToCurrency("BRL");
            }, 5000); // 5 segundos

            return () => clearTimeout(timer); // limpa o timer se erro sumir antes
        }

    }, [amount, fromCurrency, toCurrency, currenciesQuote, isLoadingCurrencies, currenciesQuoteError]);

    if (isLoadingCurrencies) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress />
            </Box>
        );
    }

    if (currenciesQuoteError) {
        return <p>Erro ao converter moedas.</p>
    }

    const handleSwap = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <Box display="flex" justifyContent="center" width={"100%"}>
            <Box
                bgcolor="#fff"
                p={4}
                borderRadius={4}
                boxShadow={3}
                width="100%"
            >
                <Typography variant="caption">Quantia</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Box display="flex" alignItems="center" width="40%" border={1} borderColor={"gray"} borderRadius={4}>
                        <TextField
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            variant="outlined"
                            sx={{
                                flex: 1,
                                margin: 0,
                                marginRight: 2,
                                marginLeft: 2,


                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // remove a borda visível
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // remove ao passar o mouse
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // remove ao focar
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    boxShadow: 'none', // remove sombras
                                    background: 'transparent', // opcional
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8px 0', // menos padding para parecer limpo
                                },


                            }}
                        />

                        <Autocomplete
                            disablePortal
                            options={currenciesList}
                            value={fromCurrency}
                            onChange={(event, newValue) => setFromCurrency(newValue || "")}
                            sx={{
                                flex: 1,
                                width: "100%",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // remove a borda visível
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // remove ao passar o mouse
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // remove ao focar
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    boxShadow: 'none', // remove sombras
                                    background: 'transparent', // opcional
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8px 0', // menos padding para parecer limpo
                                },

                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                    </Box>

                    <Grid size={{ xs: 12, sm: 1 }} container justifyContent="center">
                        <IconButton onClick={handleSwap}>
                            <SwapHorizIcon />
                        </IconButton>
                    </Grid>

                    <Box display="flex" alignItems="center" width="40%" border={1} borderColor={"gray"} borderRadius={4}>

                        <TextField
                            fullWidth
                            type="number"
                            value={convertedAmount}
                            onChange={(e) => setConvertedAmount(Number(e.target.value))}
                            variant="outlined"
                            sx={{
                                flex: 1,
                                margin: 0,
                                marginRight: 2,
                                marginLeft: 2,


                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // remove a borda visível
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // remove ao passar o mouse
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // remove ao focar
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    boxShadow: 'none', // remove sombras
                                    background: 'transparent', // opcional
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8px 0', // menos padding para parecer limpo
                                },


                            }}
                        />

                        <Autocomplete
                            disablePortal
                            options={currenciesList}
                            value={toCurrency}
                            onChange={(event, newValue) => setToCurrency(newValue || "")}
                            clearIcon={null}
                            sx={{
                                flex: 1,
                                width: "100%",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // remove a borda visível
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // remove ao passar o mouse
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // remove ao focar
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    boxShadow: 'none', // remove sombras
                                    background: 'transparent', // opcional
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8px 0', // menos padding para parecer limpo
                                },

                            }}

                            renderInput={(params) =>
                                <TextField
                                    sx={{
                                        marginLeft: "auto",
                                        paddingTop:0,
                                        paddingLeft: 2,
                                        '& fieldset': {
                                            border: 'none',
                                        }

                                    }}
                                    {...params}

                                    slotProps={{

                                        inputLabel: {
                                            sx: {
                                                color: "black",
                                                fontWeight: "bold",
                                                right: 0,
                                                padding: 0,
                                                marginRight: "auto",

                                            }
                                        }
                                    }}

                                />}
                        />
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default CurrencyConverter;
