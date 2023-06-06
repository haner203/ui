import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"white"} align={"row"}>
            POLÍTICAS DE PRIVACIDAD
          </Typography>
          <Typography color={"white"} align={"row"}>
            ¿Qué hacemos con tu información?
          </Typography>
          <Typography color={"white"} align={"row"}>
            Consentimiento
          </Typography>
          <Typography color={"white"} align={"row"}>
            Divulgación
          </Typography>
          <Typography color={"white"} align={"row"}>
            Shopify
          </Typography>
          <Typography color={"white"} align={"row"}>
            Pagos
          </Typography>
          <Typography color={"white"} align={"row"}>
            Servicios de Terceras partes
          </Typography>
          <Typography color={"white"} align={"row"}>
            Seguridad
          </Typography>
          <Typography color={"white"} align={"row"}>
            Información de Contato
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"row"}>
            TÉRMINOS Y CONDICIONES
          </Typography>
          <Typography color={"white"} align={"row"}>
            Términos de la tienda en linea
          </Typography>
          <Typography color={"white"} align={"row"}>
            Condiciones generales
          </Typography>
          <Typography color={"white"} align={"row"}>
            Herramientas opcionales
          </Typography>
          <Typography color={"white"} align={"row"}>
            Enlaces de terceras partes
          </Typography>
          <Typography color={"white"} align={"row"}>
            Comentarios de Usuarios
          </Typography>
          <Typography color={"white"} align={"row"}>
            Errores
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"row"}>
            CATEGORIAS
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Audifonos
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Monitores
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Memorias RAM
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Teclados
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Mouses
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"row"}>
            Procesadores
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"row"}>
            Siganos en nuestras redes Sociales
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
