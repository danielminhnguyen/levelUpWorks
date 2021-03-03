import React from "react";

import { AppBar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbarBottom: {
    top: "auto",
    bottom: 0,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function DashboardBottom() {
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appbarBottom}>
      <Typography variant="h5">© LevelUp Works 2020</Typography>
    </AppBar>
  );
}
