import React, { useState } from "react";
import { Slide, Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export default function Error(props) {
  const { message, type } = props;
  const [open, setOpen] = useState(true);

  const handleMessageClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <>
      <Snackbar
        TransitionComponent={TransitionDown}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => handleMessageClose()}
        message={message}
      >
        <Alert elevation={6} onClose={() => handleMessageClose()} severity={type}>
          {message}
        </Alert>
      </Snackbar>
      <Typography variant="h1">PAGE NOT FOUND</Typography>
    </>
  );
}
