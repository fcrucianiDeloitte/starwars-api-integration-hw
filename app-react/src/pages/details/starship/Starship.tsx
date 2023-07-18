import { useParams } from "react-router-dom";
import React from "react";
import { ApiGetSpecific, Starship } from "library-node";
import { StarshipDetail } from "library-react";
import { Box, LinearProgress } from "@mui/material";

export const StarshipPage = () => {
  const [data, setData] = React.useState<Starship | null>();
  const { starshipId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<Starship>("https://swapi.dev/api/starships");

      if (starshipId) {
        const result = await api.getData(starshipId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <StarshipDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
