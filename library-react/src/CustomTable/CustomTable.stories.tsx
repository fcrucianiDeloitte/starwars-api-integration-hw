import type { Meta, StoryObj } from "@storybook/react";
import { CustomTable } from "./CustomTable";
import React from "react";

const meta: Meta<typeof CustomTable> = {
  component: CustomTable,
};

export default meta;
type Story = StoryObj<typeof CustomTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    rows: [{ col1: "col1-value", col2: "col2-value", col3: "col4-value", col4: "col4-value" }],
    columns: [
      { title: "col1", property: "col1" as keyof object },
      { title: "col2", property: "col2" as keyof object },
      { title: "col3", property: "col3" as keyof object },
      { title: "col4", property: "col4" as keyof object },
    ],
    page: 0,
    loading: false,
    disablePrev: true,
    disableNext: true,
  },
  render: ({ rows, columns, page, loading, disableNext, disablePrev }) => (
    <CustomTable rows={rows} columns={columns} loading={loading} page={page} disableNext={disableNext} disablePrev={disablePrev}></CustomTable>
  ),
};
