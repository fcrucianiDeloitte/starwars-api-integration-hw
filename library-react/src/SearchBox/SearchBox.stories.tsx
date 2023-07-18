import type { Meta, StoryObj } from "@storybook/react";
import {SearchBox} from "./SearchBox";
import React from "react";

const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
  },
  render: ({ }) => <SearchBox></SearchBox>,
};
