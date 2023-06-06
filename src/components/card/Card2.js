import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card2 = ({ cardImage }) => {
  return (
    <Box>
      <Link
        href="http://localhost:3000/Details2/"
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
            MONITOR GAMER
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            HP, ASUS, AOC, XIAOMI, MSI
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
            Monitor de juegos curvo con frecuencia de actualización de 240 Hz e imágenes claras en escenas de acción rápida

            La compatibilidad con NVIDIA® G-SYNC ™ reduce la rotura de la imagen, la tartamudez y el retraso de la pantalla
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};
export default Card2;