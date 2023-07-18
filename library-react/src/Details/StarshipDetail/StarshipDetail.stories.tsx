import type { Meta, StoryObj } from "@storybook/react";
import StarshipDetail from "./StarshipDetail";
import React from "react";

const meta: Meta<typeof StarshipDetail> = {
  component: StarshipDetail,
};

export default meta;
type Story = StoryObj<typeof StarshipDetail>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    data: {
      name: "Rebel transport",
      model: "GR-75 medium transport",
      manufacturer: "Gallofree Yards, Inc.",
      cost_in_credits: "unknown",
      length: "90",
      max_atmosphering_speed: "650",
      crew: "6",
      passengers: "90",
      cargo_capacity: "19000000",
      consumables: "6 months",
      hyperdrive_rating: "4.0",
      MGLT: "20",
      starship_class: "Medium transport",
      pilots: [],
      films: ["https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
      created: "2014-12-15T12:34:52.264000Z",
      edited: "2014-12-20T21:23:49.895000Z",
      url: "https://swapi.dev/api/starships/17/",
    },
  },
  render: ({ data }) => <StarshipDetail data={data}></StarshipDetail>,
};
