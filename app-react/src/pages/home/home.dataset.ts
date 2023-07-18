import { Film, People, Planet, Specie, Starship, Vehicle } from "library-node";
import { ButtonDefinition, TableColumnType } from "library-react";

export const peopleColDef: TableColumnType<People, keyof People>[] = [
  {
    title: "Name",
    property: "name",
  },
  {
    title: "Birth Year",
    property: "birth_year",
  },
  {
    title: "Eye",
    property: "eye_color",
  },
  {
    title: "Gender",
    property: "gender",
  },
  {
    title: "Birth Year",
    property: "birth_year",
  },
  {
    title: "Created",
    property: "created",
  },
];

export const filmColDef: TableColumnType<Film, keyof Film>[] = [
  {
    title: "Title",
    property: "title",
  },
  {
    title: "Director",
    property: "director",
  },
  {
    title: "Producer",
    property: "producer",
  },
  {
    title: "Release Date",
    property: "release_date",
  },
];

export const planetColDef: TableColumnType<Planet, keyof Planet>[] = [
    {
      title: "Name",
      property: "name",
    },
    {
      title: "Diameter",
      property: "diameter",
    },
    {
      title: "Climate",
      property: "climate",
    },
    {
      title: "Edited",
      property: "edited",
    },
  ];

export const specieColDef: TableColumnType<Specie, keyof Specie>[] = [
    {
        title: "Name",
        property: "name",
      },
      {
        title: "Language",
        property: "language",
      },
      {
        title: "Skin Colors",
        property: "skin_colors",
      },
      {
        title: "Edited",
        property: "edited",
      },
    ]

    export const starshipColDef: TableColumnType<Starship, keyof Starship>[] = [
        {
            title: "Name",
            property: "name",
          },
          {
            title: "Model",
            property: "model",
          },
          {
            title: "Length",
            property: "length",
          },
          {
            title: "Edited",
            property: "edited",
          },
    ]

    export const vehicleColDef: TableColumnType<Vehicle, keyof Vehicle>[] = [
        {
            title: "Name",
            property: "name",
          },
          {
            title: "Model",
            property: "model",
          },
          {
            title: "Passengers",
            property: "passengers",
          },
          {
            title: "Edited",
            property: "edited",
          },
    ]

export const buttonFilter: ButtonDefinition[] = [
  {
    label: "People",
    value: "people",
  },
  {
    label: "Film",
    value: "film",
  },
  {
    label: "Planet",
    value: "planet",
  },
  {
    label: "Specie",
    value: "specie",
  },
  {
    label: "Starship",
    value: "starship",
  },
  {
    label: "Vehicle",
    value: "vehicle",
  },
];
