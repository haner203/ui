import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/pcmenu.jpg";
const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Tegnology<b style={{ color: '#e91e63' }}>Moises</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
       Tecnología a tu servicio.!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color='#9c27b0' align="center" pt={8}>
              La mejor tienda a nivel nacional
            </Typography>
            <Typography variant="h4" align="center">
              Servicio, calidad y compromiso.!
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
            El futuro de tu empresa a un clic
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
