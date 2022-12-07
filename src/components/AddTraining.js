import { Button } from "@mui/material";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import fiLocale from 'date-fns/locale/fi';

export default function AddTraining({addTraining}) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: "",
    activity: "",
    duration: "",
    customer: "",
   });

  const handleClickOpen = () => {
    console.log("Adding new training");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");

    addTraining(training);
    setOpen(false);
  };

  const handleCancel = () => {
      console.log("Cancel");
      setOpen(false);
  }

  const inputChanged = (event) => {
      console.log("Annetaan trainingille arvoja");
      setTraining({...training, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add training
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New training</DialogTitle>
        <DialogContent>
        
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fiLocale}>
          <DatePicker
            label="Date"
            inputFormat='dd.MM.yyyy'
            value={training.date}
            onChange={value => setTraining({...training, date: value})}
            renderInput={(params) => <TextField variant='standard' {...params} />}
          />
        </LocalizationProvider>
         <TextField
            name="activity"
            value={training.activity}
            margin="dense"
            label="Activity"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
            <TextField
            name="duration"
            value={training.duration}
            margin="dense"
            label="Duration"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
            <TextField
            name="customer"
            value={training.customer}
            margin="dense"
            label="Customer"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
      
          <DialogActions>
            <Button onClick={handleClose}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
