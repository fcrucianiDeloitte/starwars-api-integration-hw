import { useParams } from "react-router-dom";
import React from "react";
import { ApiGetSpecific, People } from "library-node";
import { Box, LinearProgress } from "@mui/material";
import { PeopleDetail } from "library-react";

export const PeoplePage = () => {
  const [data, setData] = React.useState<People | null>();
  const { peopleId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<People>("https://swapi.dev/api/people");

      if (peopleId) {
        const result = await api.getData(peopleId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <PeopleDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
