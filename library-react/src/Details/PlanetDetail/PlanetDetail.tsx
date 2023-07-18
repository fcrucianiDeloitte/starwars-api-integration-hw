import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Planet } from "library-node";

type PlanetDetailParamsType = {
  data: Planet;
};

const PlanetDetail = ({ data }: PlanetDetailParamsType) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{data.name}</Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem>
            <ListItemText primary="Rotation Period" secondary={data.rotation_period} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Orbital Period" secondary={data.orbital_period} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Diameter" secondary={data.diameter} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Climate" secondary={data.climate} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Gravity" secondary={data.gravity} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Terrain" secondary={data.terrain} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Surface Water" secondary={data.surface_water} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Population" secondary={data.population} />
          </ListItem>
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Residents</Typography>
        <ul>
          {data.residents.map((resident, index) => (
            <li key={index}>{resident}</li>
          ))}
        </ul>
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

export default PlanetDetail;
