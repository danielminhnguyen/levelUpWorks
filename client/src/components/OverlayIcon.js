import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const UseStyles = makeStyles((theme) => ({
  overlay: {},
}));

export default function OverlayIcon(props) {
  const classes = UseStyles();
  const { image, text, overlay } = props;
  return (
    <>
      <img src={image} alt="" />
      <div className={classes.overlay}>
        <image src={overlay} />
        <Typography>{text}</Typography>
      </div>
    </>
  );
}
