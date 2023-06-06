import React from "react";
import cardImage from "../../static/teclado.jpg";
import postImage2 from "../../static/memoria2.jpg";
import postImage1 from "../../static/monitor.jpg";
import audi from "../../static/audifonos.jpg";
import postImage4 from "../../static/laptop.jpg";
import { Box, Grid } from "@mui/material";
import Card from "../card/Card";
import Card2 from "../card/Card2";
import Card3 from "../card/Card3";
import Card4 from "../card/Card4";
import Card5 from "../card/Card5";


const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage={audi} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card2 cardImage={postImage1} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card3 cardImage={postImage2} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card4 cardImage={postImage4} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card5 cardImage={cardImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
