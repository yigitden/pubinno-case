import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const GetAlert = ({ alert, setAlert }) => {
  const handleClose = () => {
    setAlert({ ...alert, isOpen: false });
  };
  return (
    <Snackbar
      open={alert.isOpen}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={alert.type} sx={{ width: "100%" }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default GetAlert;
