import { Box, Typography, Button } from "@mui/material";
import TravelCard from "@/app/components/TravelCard";
import FiltroViagens from "./components/filter";

export default function scheduled_trips() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw'
            }}
        >

            <Typography variant="h1" component="h1" gutterBottom>
                Minhas Viagens
            </Typography>

            <Box
                sx={{
                    right: 0,
                    width: 300,
                    height: "50%",
                    backgroundColor: "rgba(0,0,0,0.5)", // semitransparente só para exemplo
                    //zIndex: 10,
                }}
            >

                <Button variant="contained" color="primary" sx={{ mb: 4 }}>Filtrar</Button>
                <FiltroViagens />

                {/* Conteúdo desse box */}
            </Box>



            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <TravelCard />
                <TravelCard />
                <TravelCard />
                <TravelCard />
            </Box>



        </Box>
    )
}