import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";

function AbsentCard() {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setValue("");
  };

  const [value, setValue] = React.useState("");
  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setAlignment("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // send request to server to update user's settings
    const reason = alignment;
    const text = document.getElementById("reason").value;
    console.log(reason, text);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        <Cancel />
      </Button>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="justify-evenly m-2 font-mono">
          <h1 className="text-xl font-bold mb-6">Reason for absence:</h1>

          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            fullWidth
            onChange={handleChange}
            aria-label="common reason for absence"
            id="common-reason"
            // disabled={document.getElementById("reason") === "" ? true : false}
            disabled={value === "" ? true : false}
          >
            <ToggleButton value="sickness">Sickness</ToggleButton>
            <ToggleButton value="event">Event</ToggleButton>
            <ToggleButton value="bunk">Bunk</ToggleButton>
          </ToggleButtonGroup>
          <h1 className="text-xl font-bold mt-3 mb-1">Other:</h1>
          <TextField
            variant="outlined"
            onChange={handleChange1}
            label="Reason"
            id="reason"
            value={value}
            fullWidth
            disabled={alignment === "" ? false : true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AbsentCard;
