import React from "react";
import MenuItem from "@mui/material/MenuItem"; 
import CorporateFareIcon from "@mui/icons-material/CorporateFare"; 
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Menu = () => {
  return (
    <>
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
        <ListItemText>Search</ListItemText>
      </MenuItem>
    </>
  );
};

export default Menu;
