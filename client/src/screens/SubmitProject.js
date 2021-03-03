import { Box, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";

// import ProjectImage from "assets/images/submit-project.png";
// import CallImage from "assets/images/call-teacher.png";
import { ReactComponent as ProjectImage } from "assets/images/projectimage.svg";
import { ReactComponent as CallTeacher } from "assets/images/callteacher.svg";
import { ReactComponent as ImgageIcon } from "assets/images/image-icon.svg";
import { ReactComponent as SubmissionIcon } from "assets/images/call-teacher-icon.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    paddingTop: "10px",
    backgroundColor: theme.palette.secondary.main,
    height: 100,
    width: 200,
    borderRadius: "10%",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3),",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    marginBottom: theme.spacing(10),
  },
  subTitle: {
    marginBottom: theme.spacing(10),
  },
  image: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

export default function SubmitProject() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div className="column">
            <div className={classes.image}>
              <ProjectImage />
              {/* <img src={ProjectImage} alt=""></img> */}
            </div>
            <Typography className={classes.title} variant="h3">
              Submit Project Photo
            </Typography>
            <Typography className={classes.subTitle}>
              After completing your project, take a screenshot of your project and upload it here.
            </Typography>
            <div className={classes.button} variant="contained" color="secondary">
              <ImgageIcon />
              <div>Send Photo</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="column">
            <div className={classes.image}>
              <CallTeacher />
              {/* <img src={CallImage} alt=""></img> */}
            </div>
            <Typography className={classes.title} variant="h3">
              Submit Project Photo
            </Typography>
            <Typography className={classes.subTitle}>
              After completing your project, take a screenshot of your project and upload it here.
            </Typography>
            <div className={classes.button} variant="contained" color="secondary">
              <SubmissionIcon />
              <div>Call Teacher</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
