import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchBarStyle } from "./SearchBar.style";

const index = ({ handleChange }) => {
  return (
    <TextField
      sx={SearchBarStyle.search}
      id="outlined-textarea"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
      onChange={(event) => handleChange(event)}
    />
  );
};

export default index;
