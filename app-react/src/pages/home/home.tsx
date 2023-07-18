import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { buttonFilter, filmColDef, peopleColDef, planetColDef, specieColDef, starshipColDef, vehicleColDef } from "./home.dataset";
import { ApiGet, Film, People, Planet, Specie, Starship, Vehicle } from "library-node";
import { ButtonGroup, CustomTable, SearchBox } from "library-react";
import { useNavigate } from "react-router-dom";

type MultiType = Film | People | Planet | Specie | Starship | Vehicle;

const Home = () => {
  const navigate = useNavigate();

  const [api, setApi] = React.useState<ApiGet<MultiType> | null>(null);
  const [columns, setColumns] = React.useState<any[]>(peopleColDef);
  const [rows, setRows] = React.useState<MultiType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [disabledPrev, setDisablePrev] = React.useState<boolean>(true);
  const [disableNext, setDisableNext] = React.useState<boolean>(true);

  const onPrevPageHandler = async () => {
    if (api) {
      await getPageOf(page - 1, api);
    }

    setPage(page + 1);
  };

  const onNextPageHandler = async () => {
    if (api) {
      await getPageOf(page + 1, api);
    }

    setPage(page + 1);
  };

  const getPageOf = async (page: number, api: ApiGet<MultiType>, collection?: string) => {
    setLoading(true);

    if (collection) {
      const columns = chooseColumns(collection);

      if (columns) {
        setColumns(columns);
      }
    }

    setRows([]);
    const results = await api.getData(page);
    console.log(results);

    if (api && results && columns) {
      setRows(results);
      setDisablePrev(api.previous == null);
      setDisableNext(api.next == null);
    }
    setLoading(false);
    console.log(false);
  };

  React.useEffect(() => {
    (async () => {
      const api = chooseApi("people");

      if (api) {
        setApi(api);
        await getPageOf(page, api);
      }
    })();
  }, []);

  const chooseColumns = (columnSetName: string) => {
    let columnSet: any[] | null = null;

    switch (columnSetName) {
      case "people":
        columnSet = peopleColDef;
        break;
      case "film":
        columnSet = filmColDef;
        break;
      case "planet":
        columnSet = planetColDef;
        break;
      case "specie":
        columnSet = specieColDef;
        break;
      case "starship":
        columnSet = starshipColDef;
        break;
      case "vehicle":
        columnSet = vehicleColDef;
        break;
    }

    return columnSet;
  };

  const chooseApi = (apiName: string): ApiGet<MultiType> | null => {
    let api: ApiGet<any> | null = null;

    switch (apiName) {
      case "people":
        api = new ApiGet<People>("https://swapi.dev/api/people");
        break;
      case "film":
        api = new ApiGet<Film>("https://swapi.dev/api/films");
        break;
      case "planet":
        api = new ApiGet<Planet>("https://swapi.dev/api/planets");
        break;
      case "specie":
        api = new ApiGet<Specie>("https://swapi.dev/api/species");
        break;
      case "starship":
        api = new ApiGet<Starship>("https://swapi.dev/api/starships");
        break;
      case "vehicle":
        api = new ApiGet<Vehicle>("https://swapi.dev/api/vehicles");
        break;
    }

    return api;
  };

  const onSearchHandler = async (e: string): Promise<void> => {
    if (api) {
      setLoading(true);
      const result = await api.searchData(e);
      setRows(result);
      setDisablePrev(api.previous == null);
      setDisableNext(api.next == null);
      setLoading(false);
    }
  };

  const onSelectElementHandler = (element: MultiType): void => {
    const splitedUrl = element.url.split("/");
    const url = splitedUrl.slice(splitedUrl.length - 3, splitedUrl.length - 1).join("/");
    navigate(url);
  };

  return (
    <>
      <Box marginBottom={7}>
        <Typography variant="h3" align="left">
          Starwars API
        </Typography>
        <Typography variant="h6" align="left">
          ...other simple integration
        </Typography>
      </Box>
      <Box marginBottom={3} sx={{ display: "flex" }}>
        <Paper></Paper>
        <ButtonGroup
          buttons={buttonFilter}
          onPressHandler={async (e: string) => {
            const api = chooseApi(e);
            const columns = chooseColumns(e);

            setPage(1);

            if (api && columns) {
              setColumns(columns);
              await getPageOf(1, api);
            }
          }}
        ></ButtonGroup>
        {<SearchBox onSearchHadler={onSearchHandler}></SearchBox>}
      </Box>
      <CustomTable
        onSelectElement={onSelectElementHandler}
        disableNext={disableNext}
        disablePrev={disabledPrev}
        rows={rows}
        columns={columns}
        loading={loading}
        page={page}
        onClickPrevPage={onPrevPageHandler}
        onClickNextPage={onNextPageHandler}
      ></CustomTable>
    </>
  );
};

export default Home;
