import React from "react";

import { AppBar, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbarBottom: {
    top: "auto",
    bottom: 0,
    height: 60,
    paddingRight: theme.spacing(3),
    justifyContent: "flex-end",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function DashboardBottom() {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="fixed"
      className={classes.appbarBottom}
    >
      <Typography variant="h5">PREPARING YOUNG MINDS FOR THE FUTURE</Typography>
    </AppBar>
  );
}
