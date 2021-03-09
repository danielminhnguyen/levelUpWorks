import { Button, Card, Dialog, DialogActions } from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import BlankProfile from "assets/img/Students/blank-profile.png";
import Profile from "mission6/Profile";

const orange = "#F9B953";
// import StudentProfile from "assets/img/student-profile.svg";

const useStyles = makeStyles({
  root: {
    width: 170,
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
  },
  cardContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
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
});
export default function StudentCard(props) {
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
    <div className={classNames(classes.cardContainer, "column")}>
      <Dialog open={open} maxWidth="xl">
        <Profile studentInfo={studentInfo} teacherInfo={teacherInfo} />
        <DialogActions>
          <div className={classes.dialogClose} onClick={handleClose}>
            <CloseIcon className="cross" onClick={handleClose} />
            <SaveAltIcon className="export" />
          </div>
        </DialogActions>
      </Dialog>

      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={image === "" ? BlankProfile : image}
          alt=""
        />
      </div>
      <Card classes={{ root: classes.root }} onClick={handleCardClick}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {name}
            </Typography>
            <Typography variant="body2" component="p" align="center">
              LEVEL {level}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
