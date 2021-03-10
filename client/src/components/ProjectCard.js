import {
  Button,
  Card,
  Dialog,
  DialogActions,
  LinearProgress,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PanToolIcon from "@material-ui/icons/PanTool";

import BlankProfile from "assets/img/Students/blank-profile.png";
import Profile from "mission6/Profile";

const orange = "#F9B953";
// import StudentProfile from "assets/img/student-profile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    overflow: "visible",
  },
  imageContainer: {
    zIndex: 99,
    transform: "translateY(20%)",
    // overflow: "visible",
    borderRadius: "50%",
  },
  image: {
    borderRadius: "50%",
    width: 80,
    height: 80,
    margin: theme.spacing(1),
  },
  cardContainer: {
    backgroundColor: "#F4F4F6",
    position: "relative",
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
    display: "flex",
    flexDirection: "row",
  },
  dialogClose: {
    position: "fixed",
    top: "18px",
    right: "200px",
    transition: "0.3s",
    height: "50px",
    width: "50px",
    "& .cross": {
      opacity: "0.5",
      color: orange,
      transition: "0.3s",
      height: "50px",
      width: "50px",
    },
    "& .export": {
      opacity: "0.5",
      color: orange,
      transition: "0.3s",
      height: "50px",
      width: "50px",
    },
    "& :hover": {
      cursor: "pointer",
      height: "60px",
      width: "60px",
      opacity: "1",
    },
  },
  progress: {
    width: 150,
    height: 30,
  },
  helpRequest: {
    position: "absolute",
    right: 0,
    transform: "tranlateX(10px)",
  },
  growth: {
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
}));
export default function ProjectCard(props) {
  const classes = useStyles();
  const { name, level, image, studentInfo, teacherInfo } = props;

  const [open, setOpen] = useState(false);
  const handleCardClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        className={classNames(classes.cardContainer)}
        onClick={handleCardClick}
        elevation={5}
      >
        <img
          className={classes.image}
          src={image === "" ? BlankProfile : image}
          alt=""
        />
        <div className={classNames(classes.growth, "row")}>
          <div>
            <Typography>Date | TIME</Typography>
            <Typography variant="h4">{name}</Typography>
          </div>
          <Typography variant="h2">P {getRandomInt(1, 30)}</Typography>
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={50}
          />
        </div>
        <PanToolIcon
          className={classes.helpRequest}
          fontSize="large"
          color="primary"
        />
      </Paper>
      <Dialog open={open} maxWidth="xl">
        <Profile studentInfo={studentInfo} teacherInfo={teacherInfo} />
        <DialogActions>
          <div className={classes.dialogClose} onClick={handleClose}>
            <CloseIcon className="cross" onClick={handleClose} />
            <SaveAltIcon className="export" />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
