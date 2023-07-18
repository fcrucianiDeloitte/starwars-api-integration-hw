import { useParams } from "react-router-dom";
import React from "react";
import { ApiGetSpecific, Vehicle } from "library-node";
import { VehicleDetail } from "library-react";
import { Box, LinearProgress } from "@mui/material";

export const VehiclePage = () => {
  const [data, setData] = React.useState<Vehicle | null>();
  const { vehicleId } = useParams();

  React.useEffect(() => {
    (async () => {
      const api = new ApiGetSpecific<Vehicle>("https://swapi.dev/api/vehicles");

      if (vehicleId) {
        const result = await api.getData(vehicleId);
        if (result) {
          setData(result);
        }
      }
    })();
  }, []);

  return (
    <>
      <Box alignContent="center">{data ? <VehicleDetail data={data} /> : <LinearProgress></LinearProgress>}</Box>
    </>
  );
};
