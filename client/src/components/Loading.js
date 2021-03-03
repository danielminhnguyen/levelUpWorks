import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 20,
    color: "#fff",
  },
}));

export default function Loading(open) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop open={open} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
