'use client';
import { TextField,Typography, Stack } from '@mui/material';
import SelectCountry from './SelectCountry';
import Slider from './Slider'

export default function TravelForm() {

    return (
        <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: 0,
                margin: 0,
            }}>

            <div>

                <Typography variant="subtitle1" component="h1" gutterBottom fontWeight={600}> 
                    Onde esta?
                </Typography>
                <SelectCountry label="pais de origem" />
            </div>

            <div>
                <Typography variant="subtitle1" component="h1" gutterBottom  fontWeight={600}>
                    para onde vai?
                </Typography>
                <SelectCountry label="pais de destino" />
            </div>

            <div>
                <Typography variant="subtitle1" component="h1" gutterBottom fontWeight={600}>
                    data de partida
                </Typography>
                <TextField id="filled-basic" type='date' variant="outlined" />
            </div>

            <div>

                <Typography variant="subtitle1" component="h1" gutterBottom fontWeight={600}>
                    data de volta
                </Typography>
                <TextField id="filled-basic" type='date' variant="outlined" />
            </div>

            <div>
                <Typography variant="subtitle1" component="h1" gutterBottom fontWeight={600}>
                    Cadastro de Viagem
                </Typography>
                <Slider />

            </div>
        </Stack>
    )
}