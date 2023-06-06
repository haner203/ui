import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card4 = ({ cardImage }) => {
    return (
        <Box>
            <Link
                href="http://localhost:3000/details"
                sx={{ textDecoration: "none" }}
            >
                {" "}
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={cardImage}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align="center"
                        component="div"
                        color='#9c27b0'
                    >
                        LAPTOP GAMER
                    </Typography>
                    <Typography gutterBottom variant="h5" align="center" component="div">
                        ASUS, HP , MSI, LENOVO, ACER
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        align="center"
                        component="div"
                        color="text.secondary"
                    >

                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary">
                        Las portátiles diseñadas para videojuegos pueden ser algo más caras que los laptops de uso general, porque incluyen una tarjeta de video dedicada que permite que los juegos se vean a buena calidad gráfica, con resoluciones altas y una tasa de cuadros por segundo aceptable. Pero aún así, este segmento de portátiles tampoco tienen que ser tan caras.
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    );
};
export default Card4;