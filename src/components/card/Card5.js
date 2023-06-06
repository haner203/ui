import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card5 = ({ cardImage }) => {
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
                        TECLADO Y MOUSE GAMER
                    </Typography>
                    <Typography gutterBottom variant="h5" align="center" component="div">
                        LOGITECH, ASUS, DELUX, KNUP, HYPER X, XIAOMI
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
                        Hay muchas cosas que los jugadores necesitan para tener una experiencia de juego agradable. Sin embargo, lo más importante es, obviamente, un ratón o un teclado para juegos de alta calidad.
                        Estos dispositivos permiten a los jugadores controlar sus partidas con mayor facilidad.
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    );
};
export default Card5;