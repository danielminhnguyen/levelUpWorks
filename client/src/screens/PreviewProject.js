import React from "react";

import { makeStyles } from "@material-ui/core";

import { ReactComponent as MakeProject } from "assets/images/makeproject.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",

    paddingBottom: "56.25%",
    height: 0,
  },
  photo: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
}));

export default function PreviewProject() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MakeProject className={classes.photo} />
    </div>
  );
}
