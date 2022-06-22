import { useState } from "react"; 
import { Box, Typography, Modal } from "@mui/material";
import { ModalStyle } from "./Modal.style";
import Button from "../Button";
import TimePicker from "../TimePicker";
import Input from "../Input";
import AddIcon from "@mui/icons-material/Add";
import Api from "../../service/Api";
 
export default function BasicModal({getAllData}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [values, setValues] = useState([]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [nameError,setNameError]=useState(false)
  const [addressError,setAddressError]=useState(false)
  const [timeOpenError,setTimeOpenError]=useState(false)
  const [timeCloseError,setTimeCloseError]=useState(false)

  const postNewLocation = () => {

    setNameError(false)
    setAddressError(false)
    setTimeOpenError(false)
    setTimeCloseError(false)

    if(values.name == undefined){
      setNameError(true)
    }else if(values.address == undefined){
      setAddressError(true)
    }else if(values.time_open == undefined){
      setTimeOpenError(true)
    }else if(values.time_close == undefined){
      setTimeCloseError(true)
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
      <Button onClick={handleOpen} text="New" color="error" startIcon={<AddIcon />} />

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
              error={nameError}
            />
            <Input
              name="address"
              label="Address"
              placeholder="Address"
              onChange={onChange}
              error={addressError}
            />

            <Box sx={ModalStyle.time_picker}>
              <TimePicker
                label="Opening Time"
                name="time_open"
                onChange={onChange}
                error={timeOpenError}
              />
              <TimePicker
                label="Closing Time"
                name="time_close"
                onChange={onChange}
                error={timeCloseError}
              />
            </Box>
            <Box sx={ModalStyle.button}>
              <Button text="Save" onClick={postNewLocation} color="error"/>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
