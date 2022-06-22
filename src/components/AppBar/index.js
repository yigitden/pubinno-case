import { AppBar, Box, Toolbar,ImageListItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../images/logo.png";
import { AppBarStyle } from "./AppBar.style"; 

const index = () => {
  return (
    <AppBar sx={AppBarStyle.app_bar} position="static">
      <Toolbar>
        <Box sx={AppBarStyle.container}>
          <ImageListItem sx={AppBarStyle.logo}>
            <img src={logo} alt="Pubinno Logo" />
          </ImageListItem> 
          <AccountCircle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default index;
