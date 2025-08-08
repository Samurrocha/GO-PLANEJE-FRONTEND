import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box
} from "@mui/material";

export default function TravelCard() {
    return (
        <Box
            sx={{
                width: {
                    xs: '100%',      // 100% em telas pequenas (mobile)
                    sm: 350,         // largura fixa confortável em tablets
                    md: 345,         // largura padrão desktop
                    lg: 345,
                    //xl: '25%', // em telas muito grandes, deixa o box menor para não ficar esticado demais
                },
                mx: 'auto',        // centraliza horizontalmente
                mb: 4,             // margem inferior para espaçamento vertical
            }}
        >
            <Card elevation={8} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    src="https://source.unsplash.com/random/800x600?travel"
                    alt="Destino de Viagem"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '16/9',  // mantém proporção da imagem
                        objectFit: 'cover',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Paris, França
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Explore a cidade luz com pacotes exclusivos para você e sua família.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Saiba mais</Button>
                    <Button size="small" variant="contained">Reservar</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
