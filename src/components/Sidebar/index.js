import React from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
const index = () => {
  return (
 <> <Box sx={{height:500}}>
      <MenuItem>
        <ListItemIcon>
          <CorporateFareIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Distributors</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <GroupOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Customers</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SearchIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ color: "red" }}>Search</ListItemText>
      </MenuItem></Box>
      </>
     
  );
};

export default index;
