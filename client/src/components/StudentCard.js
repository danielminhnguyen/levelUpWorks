import { Card } from "@material-ui/core";
import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as StudentProfile } from "assets/img/student-profile.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function StudentCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            src={StudentProfile}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Student Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              LEVEL 100
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>

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
