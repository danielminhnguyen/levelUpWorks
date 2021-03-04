import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import React from "react";

import { ReactComponent as BackDrop } from "assets/img/backdrop.svg";
import classNames from "classnames";
import StudentCard from "components/StudentCard";
import { Students } from "constants/Students";

const useStyles = makeStyles((theme) => ({
  backDrop: {
    position: "absolute",
    zIndex: -1,
  },
  welcome: {
    height: 300,
    overflow: "hidden",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classNames(classes.welcome, "column")}>
          <div className={classes.backDrop}>
            <BackDrop />
          </div>
          <div>
            <Typography variant="h2" align="left">
              Welcome Back Alan!
            </Typography>
            <Typography variant="h5" align="left">
              No Reminders Today
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} className="flex-column-end">
          <div>
            <Button variant="outlined">Email Progress</Button>
          </div>
        </Grid>
        <Grid item xs={6} className="column">
          <Typography variant="h4">Botany Downs Library</Typography>
          <Grid container>
            {Students ? (
              Students.botany.map((student) => (
                <Grid item xs={4}>
                  <StudentCard name={student.name} level={student.level} />
                </Grid>
              ))
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6} className="column">
          <Typography variant="h4">Epsom Girls Grammar School</Typography>
          <Grid container>
            {Students ? (
              Students.epsom.map((student) => (
                <Grid item xs={4}>
                  <StudentCard
                    name={student.name}
                    level={student.level}
                    image={student.image}
                  />
                </Grid>
              ))
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
