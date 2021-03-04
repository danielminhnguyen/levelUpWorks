import { Card } from "@material-ui/core";
import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import BlankProfile from "assets/img/Students/blank-profile.png";

// import StudentProfile from "assets/img/student-profile.svg";

const useStyles = makeStyles({
  root: {
    width: 170,
    overflow: "visible",
  },
  imageContainer: {
    zIndex: 10000,
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
});
export default function StudentCard(props) {
  const classes = useStyles();
  const { name, level, image } = props;

  return (
    <div className={classNames(classes.cardContainer, "column")}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={image === "" ? BlankProfile : image}
          alt=""
        />
      </div>
      <Card classes={{ root: classes.root }}>
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
