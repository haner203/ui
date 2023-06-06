import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import postImage2 from "../../static/teclado.jpg";
import postImage3 from "../../static/monitor.jpg";
import postImage4 from "../../static/Tarjetas-graficas.jpg";
import React from "react";
import Card from "../card/Card2";

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Más Populares
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage4}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" —Las tarjetas sin dudá es lo primordial para correr todo en este 2023"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage3}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" —La amplia gama de colores de este momitor es unica"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" —Los teclado y mouses RGB es todo lo que un GAMER desea"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        Más vendido
      </Typography>
      <Card cardImage={postImage3} />
    </Box>
  );
};

export default Rightbar;
