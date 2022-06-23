import { Box, Typography } from "@mui/material";
import React from "react";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { HeaderStyle } from "./Header.style";
import HamburgerMenu from "../Sidebar/HamburgerMenu";
const index = ({ matches }) => {
  return (
    <Box sx={HeaderStyle.container}>
      <Box sx={HeaderStyle.menu}>
        <SportsBarOutlinedIcon />
        <Typography sx={HeaderStyle.text}>Pubinno</Typography>
        <ArrowForwardIosOutlinedIcon fontSize="small" />
        <Typography>Pubinno Test</Typography>
      </Box>
      <Box sx={HeaderStyle.menu}>{matches ? <HamburgerMenu /> : <></>}</Box>
    </Box>
  );
};

export default index;
