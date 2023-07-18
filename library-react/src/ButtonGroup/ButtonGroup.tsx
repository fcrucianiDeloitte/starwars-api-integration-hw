import { Box, Button, List, ListItem, ListItemText, Stack } from "@mui/material";
import React from "react";

type ButtonDefinition = {
  label: string;
  value: string;
};

type ButtonGroupParamsType = {
  buttons: ButtonDefinition[];
  onPressHandler?: (e: string) => void;
};

const ButtonGroup = ({ buttons, onPressHandler }: ButtonGroupParamsType) => {
  const [selected, setSelected] = React.useState<number>(0);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }} justifyContent='flex-start'>
        {buttons.map((button, index) => (
          <Box key={index} marginRight={2}>
            <Button
              variant={index == selected ? "contained" : "outlined"}
              color="primary"
              onClick={() => {
                setSelected(index);

                if (onPressHandler) {
                  onPressHandler(button.value);
                }
              }}
            >
              <ListItemText primary={button.label} />
            </Button>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export { ButtonGroup };
export type { ButtonDefinition };
