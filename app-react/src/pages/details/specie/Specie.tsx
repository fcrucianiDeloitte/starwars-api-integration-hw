import { useParams } from "react-router-dom";
import React from "react";
import { SpecieDetail } from "library-react";
import { Box, LinearProgress } from "@mui/material";
import { Specie, ApiGetSpecific } from "library-node";

export const SpeciePage = () => {
  const [data, setData] = React.useState<Specie | null>();
  const { specieId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<Specie>("https://swapi.dev/api/species");

      if (specieId) {
        const result = await api.getData(specieId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <SpecieDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
