import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Specie } from "library-node";

type SpecieDetailParamsType = {
  data: Specie;
};

const SpecieDetail = ({ data }: SpecieDetailParamsType) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
      <Typography variant="h4">{data.name}</Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem>
          <ListItemText primary="Classification" secondary={data.classification} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Designation" secondary={data.designation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Average Height" secondary={data.average_height} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Skin Colors" secondary={data.skin_colors} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Hair Colors" secondary={data.hair_colors} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Eye Colors" secondary={data.eye_colors} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Average Lifespan" secondary={data.average_lifespan} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Language" secondary={data.language} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Homeworld" secondary={data.homeworld} />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">People</Typography>
      <ul>
        {data.people.map((person, index) => (
          <li key={index}>{person}</li>
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

export default SpecieDetail;
