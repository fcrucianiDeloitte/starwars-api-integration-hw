import Home from "./pages/home/home";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CentralLayout from "./layouts/CentralLayout";
import { CssBaseline } from "@mui/material";
import { PeoplePage } from "./pages/details/people/People";
import { SpeciePage } from "./pages/details/specie/Specie";
import { FilmPage } from "./pages/details/film/Film";
import { StarshipPage } from "./pages/details/starship/Starship";
import { VehiclePage } from "./pages/details/vehicle/Vehicle";
import { PlanetPage } from "./pages/details/planet/Planet";
import NavigatorLayout from "./layouts/NavigatorLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/films/:filmId",
    element: (
      <NavigatorLayout>
        <FilmPage />
      </NavigatorLayout>
    ),
  },
  {
    path: "/people/:peopleId",
    element: (
      <NavigatorLayout>
        <PeoplePage />
      </NavigatorLayout>
    ),
  },
  {
    path: "/planets/:planetId",
    element: (
      <NavigatorLayout>
        <PlanetPage />
      </NavigatorLayout>
    ),
  },
  {
    path: "/species/:specieId",
    element: (
      <NavigatorLayout>
        <SpeciePage />
      </NavigatorLayout>
    ),
  },
  {
    path: "/starships/:starshipId",
    element: (
      <NavigatorLayout>
        <StarshipPage />
      </NavigatorLayout>
    ),
  },
  {
    path: "/vehicles/:vehicleId",
    element: (
      <NavigatorLayout>
        <VehiclePage />
      </NavigatorLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <CentralLayout>
      <RouterProvider router={router} />
    </CentralLayout>
  </React.StrictMode>
);
