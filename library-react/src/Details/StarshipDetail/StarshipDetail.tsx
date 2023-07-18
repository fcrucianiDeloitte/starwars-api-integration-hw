import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Starship } from "library-node";

type StarshipDetailParamsType = {
  data: Starship;
};

const StarshipDetail = ({ data }: StarshipDetailParamsType) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{data.name}</Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem>
            <ListItemText primary="Model" secondary={data.model} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Manufacturer" secondary={data.manufacturer} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cost in Credits" secondary={data.cost_in_credits} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Length" secondary={data.length} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Max Atmosphering Speed" secondary={data.max_atmosphering_speed} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Crew" secondary={data.crew} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Passengers" secondary={data.passengers} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cargo Capacity" secondary={data.cargo_capacity} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Consumables" secondary={data.consumables} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hyperdrive Rating" secondary={data.hyperdrive_rating} />
          </ListItem>
          <ListItem>
            <ListItemText primary="MGLT" secondary={data.MGLT} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Starship Class" secondary={data.starship_class} />
          </ListItem>
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Films</Typography>
        <ul>
          {data.films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default StarshipDetail;
