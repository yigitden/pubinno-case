import { Box, Typography, Modal } from "@mui/material";
import { EditStyle } from "./Edit.style";
import Button from "../Button";
import TimePicker from "../TimePicker";
import Input from "../Input";
import Api from "../../service/Api";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TableItem from "../Table/TableItem";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import GetAlert from "../Alert/Alert";

function Edit({ row, getAllData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [alert, setAlert] = useState({ isOpen: false, message: "", type: "" });

  const [values, setValues] = useState({
    name: `${row.name}`,
    address: `${row.address}`,
    time_open: `${row.time_open}`,
    time_close: `${row.time_close}`,
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const editLocation = (id) => {
    setNameError(false);
    setAddressError(false);
    if (values.name === '') {
      setNameError(true);
    }
    if (values.address === '') {
      setAddressError(true);
    } else {
      Api()
        .put(`location/${id}`, values)
        .then(() => {
          handleClose();
          getAllData();
          setAlert({
            isOpen: true,
            message: "Editing successful",
            type: "success",
          });
        })
        .catch((err) => alert(err));
    }
    console.log(values.name);
  };

  const deleteLocation = (id) => {
    Api()
      .delete(`location/${id}`)
      .then(() => {
        handleClose();
        getAllData();
        setAlert({
          isOpen: true,
          message: "Deletion successful",
          type: "success",
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <>
      <TableItem row={row} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={EditStyle.style}>
          <Box sx={EditStyle.title}>
            <Typography id="modal-modal-title" sx={EditStyle.text}>
              Edit Location
            </Typography>
            <Typography
              id="modal-modal-close"
              sx={EditStyle.text_close}
              onClick={handleClose}
            >
              X
            </Typography>
          </Box>
          <Box sx={EditStyle.inputs}>
            <Input
              name="name"
              label="Name"
              value={row.name}
              onChange={onChange}
              error={nameError}
            />
            <Input
              name="address"
              label="Address"
              value={row.address}
              onChange={onChange}
              error={addressError}
            />

            <Box sx={EditStyle.time_picker}>
              <TimePicker
                label="Opening Time"
                name="time_open"
                onChange={onChange}
                value={row.time_open}
              />
              <TimePicker
                label="Closing Time"
                name="time_close"
                onChange={onChange}
                value={row.time_close}
              />
            </Box>
            <Box sx={EditStyle.button}>
              <Button
                text="Delete"
                color="error"
                startIcon={<DeleteOutlinedIcon />}
                onClick={() => deleteLocation(row.id)}
              />
              <Button
                text="Edit"
                color="success"
                startIcon={<EditIcon />}
                onClick={() => editLocation(row.id)}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
      <GetAlert alert={alert} setAlert={setAlert} />
    </>
  );
}

export default Edit;
