import type { Meta, StoryObj } from "@storybook/react";
import VehicleDetail from "./VehicleDetail";
import React from "react";

const meta: Meta<typeof VehicleDetail> = {
  component: VehicleDetail,
};

export default meta;
type Story = StoryObj<typeof VehicleDetail>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    data: {
      name: "Sail barge",
      model: "Modified Luxury Sail Barge",
      manufacturer: "Ubrikkian Industries Custom Vehicle Division",
      cost_in_credits: "285000",
      length: "30",
      max_atmosphering_speed: "100",
      crew: "26",
      passengers: "500",
      cargo_capacity: "2000000",
      consumables: "Live food tanks",
      vehicle_class: "sail barge",
      pilots: [],
      films: ["https://swapi.dev/api/films/3/"],
      created: "2014-12-18T10:44:14.217000Z",
      edited: "2014-12-20T21:30:21.684000Z",
      url: "https://swapi.dev/api/vehicles/24/",
    },
  },
  render: ({ data }) => <VehicleDetail data={data}></VehicleDetail>,
};
