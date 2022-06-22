import AddIcon from "@mui/icons-material/Add";
import AppBar from "./components/AppBar";
import Header from "./components/Header";
import Button from "./components/Button";
import { ButtonStyle } from "./components/Button/Button.style";
import SearchBar from "./components/SearchBar";
import { Typography, Box } from "@mui/material";
 
import Modal from "./components/Modal";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import Sidebar from "./components/Sidebar";
import { AppStyle } from "./App.style";
import Api from "./service/Api";
import { useEffect, useState } from "react";
import TableComp from "./components/Table";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function App() {

 





  const [data,setData] = useState([])
  const getAllData = () => {
    Api().get('/location')
         .then((response) => setData(response.data))
         .catch((err)=>alert(err))
  }
  
  useEffect(() => {
    getAllData()
  },[])

  return (
    <>
      <AppBar />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={0} md={2}>
          <Item>
            <Sidebar />
          </Item>
        </Grid>
        <Grid item xs={12} md={10}>
          <Box sx={AppStyle.menu}>
            <Typography variant="h5" fontWeight="bold">
              Locations
            </Typography>
            <Box sx={AppStyle.right_side}>
              <SearchBar />
              <Modal getAllData={getAllData}/>
            </Box>
          </Box>
          <TableComp  getAllData={getAllData} data={data}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
