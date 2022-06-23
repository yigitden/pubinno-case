import AppBar from "./components/AppBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Typography, Box, useMediaQuery, Grid, Paper } from "@mui/material";
import Modal from "./components/Modal";
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
  const [data, setData] = useState([]);
  const getAllData = async () => {
    await Api()
      .get("/location")
      .then((response) => setData(response.data))
      .catch((err) => alert(err));
  };
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
    const newFilterSearchData = data.filter((value) => {
      value.name.toLowerCase().includes(query.toLowerCase());
    });

    if (query == "") {
      getAllData();
    } else {
      setData(newFilterSearchData);
    }
  };

  const matches = useMediaQuery("(max-width:900px)"); // sidebar for mobile

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <AppBar />
      <Header matches={matches} />
      <Grid container spacing={2}>
        {matches ? (
          <></>
        ) : (
          <Grid item md={2}>
            <Item>
              <Sidebar />
            </Item>
          </Grid>
        )}

        <Grid item xs={12} md={10}>
          <Box sx={AppStyle.menu}>
            <Typography variant="h5" fontWeight="bold">
              Locations
            </Typography>
            <Box sx={AppStyle.right_side}>
              <SearchBar handleChange={handleChange} />
              <Modal getAllData={getAllData} />
            </Box>
          </Box>
          <TableComp getAllData={getAllData} data={data} query={query} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
