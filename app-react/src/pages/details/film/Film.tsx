import { useParams } from "react-router-dom";
import React from "react";
import { FilmDetail } from "library-react";
import { ApiGetSpecific, Film } from "library-node";
import { Box, LinearProgress } from "@mui/material";

export const FilmPage = () => {
  const [data, setData] = React.useState<Film | null>();
  const { filmId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<Film>("https://swapi.dev/api/films");

      if (filmId) {
        const result = await api.getData(filmId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <FilmDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
