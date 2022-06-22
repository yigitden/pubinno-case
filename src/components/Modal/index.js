import * as React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { ModalStyle } from "./Modal.style";
import Button from "../Button";
import TimePicker from "../TimePicker";
import Input from "../Input";
import AddIcon from "@mui/icons-material/Add";
import Api from "../../service/Api";
 
export default function BasicModal({getAllData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [values, setValues] = React.useState([]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const postNewLocation = () => {
    if(values.name === undefined){
      alert('You have to fill the name field')
    }else if(values.address === undefined){
      alert('You have to fill the address field')
    }else{
      Api().post('location',values)
           .then(()=>{
            handleClose();
            getAllData();
          })
           .catch((err)=>alert(err))
    }
    
  };
  return (
    <div>
      <Button onClick={handleOpen} text="New" startIcon={<AddIcon />} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle.style}>
          <Box sx={ModalStyle.title}>
            <Typography id="modal-modal-title" sx={ModalStyle.text}>
              Add New Location
            </Typography>
            <Typography
              id="modal-modal-close"
              sx={ModalStyle.text_close}
              onClick={handleClose}
            >
              X
            </Typography>
          </Box>
          <Box sx={ModalStyle.inputs}>
            <Input
              name="name"
              label="Name"
              placeholder="Name"
              onChange={onChange}
            />
            <Input
              name="address"
              label="Address"
              placeholder="Address"
              onChange={onChange}
            />

            <Box sx={ModalStyle.time_picker}>
              <TimePicker
                label="Opening Time"
                name="time_open"
                onChange={onChange}
              />
              <TimePicker
                label="Closing Time"
                name="time_close"
                onChange={onChange}
              />
            </Box>
            <Box sx={ModalStyle.button}>
              <Button text="Save" onClick={postNewLocation} />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
