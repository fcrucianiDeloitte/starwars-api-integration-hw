import { useParams } from "react-router-dom";
import React from "react";
import { Box, LinearProgress } from "@mui/material";
import { ApiGetSpecific, Planet } from "library-node";
import { PlanetDetail } from "library-react";

export const PlanetPage = () => {
  const [data, setData] = React.useState<Planet | null>();
  const { planetId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<Planet>("https://swapi.dev/api/planets");

      if (planetId) {
        const result = await api.getData(planetId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <PlanetDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
