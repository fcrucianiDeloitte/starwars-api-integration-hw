import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { People } from "library-node";

type PeopleDetailParamsType = {
  data: People;
};

const PeopleDetail = ({ data }: PeopleDetailParamsType) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
      <Typography variant="h4">{data.name}</Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem>
          <ListItemText primary="Height" secondary={data.height} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mass" secondary={data.mass} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Hair Color" secondary={data.hair_color} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Skin Color" secondary={data.skin_color} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Eye Color" secondary={data.eye_color} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Birth Year" secondary={data.birth_year} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gender" secondary={data.gender} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Homeworld" secondary={data.homeworld} />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Films</Typography>
      <ul>
        {data.films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
      <Typography variant="h6">Vehicles</Typography>
      <ul>
        {data.vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle}</li>
        ))}
      </ul>
      <Typography variant="h6">Starships</Typography>
      <ul>
        {data.starships.map((starship, index) => (
          <li key={index}>{starship}</li>
        ))}
      </ul>
    </Box>
    </>
  );
};

export default PeopleDetail;
