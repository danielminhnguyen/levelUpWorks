import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ClassNames from "classnames";

const useStyles = makeStyles((theme) => ({
  circleWrapper: {
    display: "flex",
    minWidth: 650,
    maxWidth: 850,
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    border: "solid #A2A0A0 1px",
    // margin: theme.spacing(1),
  },
  circleActive: {
    backgroundColor: "#99EDCC",
  },
}));

export function ProgressBarTop(props) {
  const repeat = { props };
  let dom = [];
  for (let i = 0; i < repeat; i++) {
    dom.push(<Box boxShadow={4} className="progress-circle" />);
  }
  return <div className="circle-wrapper">{dom}</div>;
}

export function ProgressBar(props) {
  const classes = useStyles();
  const { startNo, end, activeArray } = props;
  let dom = [];
  // console.log(activeArray);
  for (let i = startNo; i <= end; i++) {
    if (activeArray.includes(`${i}`)) {
      dom.push(
        <Box boxShadow={4} className={ClassNames(classes.circle, classes.circleActive)}>
          {i}
        </Box>
      );
    } else {
      dom.push(
        <Box boxShadow={4} className={classes.circle}>
          {i}
        </Box>
      );
    }
  }
  return <div className={classes.circleWrapper}>{dom}</div>;
}
