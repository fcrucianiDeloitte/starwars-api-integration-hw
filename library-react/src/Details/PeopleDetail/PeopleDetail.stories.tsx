import type { Meta, StoryObj } from "@storybook/react";
import PeopleDetail from "./PeopleDetail";
import React from "react";

const meta: Meta<typeof PeopleDetail> = {
  component: PeopleDetail,
};

export default meta;
type Story = StoryObj<typeof PeopleDetail>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    data: {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
      starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
  },
  render: ({ data }) => <PeopleDetail data={data}></PeopleDetail>,
};
