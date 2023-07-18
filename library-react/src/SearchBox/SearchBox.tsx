import { Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { ChangeEvent, KeyboardEvent } from "react";

type SearchBoxParamsType = {
  onSearchHadler?: (e: string) => void;
};

const SearchBox = ({ onSearchHadler }: SearchBoxParamsType) => {
  const [text, setText] = React.useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter" && onSearchHadler) {
      onSearchHadler(text);
    }
  };

  return (
    <>
      <TextField
        label="Search"
        variant="filled"
        size="small"
        onChange={handleSearch}
        onKeyDown={onKeyDown}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="Search">
              <Search />
            </IconButton>
          ),
        }}
      />
    </>
  );
};

export { SearchBox };
