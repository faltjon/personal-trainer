import { Button } from "@mui/material";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function AddCustomer({addCustomer}) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: "",
   });

  const handleClickOpen = () => {
    console.log("Adding new customer");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");

    addCustomer(customer);
    setOpen(false);
  };

  const handleCancel = () => {
      console.log("Cancel");
      setOpen(false);
  }

  const inputChanged = (event) => {
      console.log("Annetaan customerille arvoja");
      setCustomer({...customer, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add customer
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New customer</DialogTitle>
        <DialogContent>
          <TextField
            name="firstname"
            value={customer.firstname}
            autoFocus
            margin="dense"
            label="Firstname"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="lastname"
            margin="dense"
            value={customer.lastname}
            label="Lastname"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="streetaddress"
            value={customer.streetaddress}
            margin="dense"
            label="Street address"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="postcode"
            value={customer.postcode}
            margin="dense"
            label="Postcode"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="city"
            value={customer.city}
            margin="dense"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="email"
            value={customer.email}
            margin="dense"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="phone"
            value={customer.phone}
            margin="dense"
            label="Phone"
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
