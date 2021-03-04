import { Card } from "@material-ui/core";
import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import StudentProfile from "assets/img/student-profile.svg";

const useStyles = makeStyles({
  root: {
    width: 200,
    marginTop: 10,
    overflow: "visible",
  },
  imageContainer: {
    zIndex: 10000,
    transform: "translateY(20%)",
    // overflow: "visible",
    borderRadius: "50%",
  },
  image: {
    width: 80,
  },
});
export default function StudentCard(props) {
  const classes = useStyles();
  const { name, level, image } = props;

  return (
    <div className={classNames(classes.root, "column")}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt="" />
      </div>
      <Card>
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
