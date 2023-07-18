import type { Meta, StoryObj } from "@storybook/react";
import {ButtonGroup} from "./ButtonGroup";
import React from "react";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    buttons: [{label: 'bt1', value: '1'}, {label: 'bt2', value: '2'}]
  },
  render: ({ buttons }) => <ButtonGroup buttons={buttons}></ButtonGroup>,
};
