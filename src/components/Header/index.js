import { Box, Typography } from "@mui/material";
import React from "react";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { HeaderStyle } from "./Header.style";

const index = () => {
  return (
    <Box sx={HeaderStyle.container}>
      <SportsBarOutlinedIcon />
      <Typography sx={HeaderStyle.text}>Pubinno</Typography>
      <ArrowForwardIosOutlinedIcon fontSize="small" />
      <Typography>Pubinno Test</Typography>
    </Box>
  );
};

export default index;
