import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card = ({ cardImage }) => {
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
            AUDIFONOS GAMER
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            LG, HYPER X, LOGITECH, RYZER, SONY
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
            El audio para juegos es crítico para jugar lo mejor posible. Los audífonos con micrófono y los bocinas para juegos de Logitech G ofrecen sonido envolvente inmersivo, micrófonos nítidos para comunicaciones de voz y chat, y ecualizador personalizable para un sonido óptimo.
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default Card;
