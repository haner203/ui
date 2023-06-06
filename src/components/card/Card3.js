import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card3 = ({ cardImage }) => {
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
                        MEMORIA RAM
                    </Typography>
                    <Typography gutterBottom variant="h5" align="center" component="div">
                        CORSAIR, FURY, SAMSUNG, KINGSTON
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
                        La RAM (memoria de acceso aleatorio) es un componente esencial en un ordenador para videojuegos. Añadir más RAM puede aumentar la capacidad de respuesta del sistema.
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    );
};
export default Card3;