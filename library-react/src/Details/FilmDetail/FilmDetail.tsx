import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Film } from "library-node";

type FilmDetailParamsType = {
  data: Film;
};

const FilmDetail = ({ data }: FilmDetailParamsType) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="subtitle1">Episode {data.episode_id}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1">{data.opening_crawl}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">
          <strong>Director:</strong> {data.director}
        </Typography>
        <Typography variant="body2">
          <strong>Producer:</strong> {data.producer}
        </Typography>
        <Typography variant="body2">
          <strong>Release Date:</strong> {data.release_date}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Characters:</Typography>
        <ul>
          {data.characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
        <Typography variant="h6">Planets:</Typography>
        <ul>
          {data.planets.map((planet, index) => (
            <li key={index}>{planet}</li>
          ))}
        </ul>
        <Typography variant="h6">Starships:</Typography>
        <ul>
          {data.starships.map((starship, index) => (
            <li key={index}>{starship}</li>
          ))}
        </ul>
        <Typography variant="h6">Vehicles:</Typography>
        <ul>
          {data.vehicles.map((vehicle, index) => (
            <li key={index}>{vehicle}</li>
          ))}
        </ul>
        <Typography variant="h6">Species:</Typography>
        <ul>
          {data.species.map((specie, index) => (
            <li key={index}>{specie}</li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default FilmDetail;
