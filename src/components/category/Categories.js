import React from "react";
import Proc from "../../static/procesador.jpg";
import TarVi from "../../static/Tarjetas-graficas.jpg";
import Gab from "../../static/gabinete.jpg";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${Proc})` }}>
          <StyledTypography align="center" variant="h3">
            Procesadores
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${TarVi})` }}>
          <StyledTypography align="center" variant="h3">
            T. Graficas
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${Gab})` }}>
          <StyledTypography align="center" variant="h3">
            Gabinetes
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
