import { Grid, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import StudentCard from "components/StudentCard";
import { ProjectData, StudentsData } from "constants/data";
import React from "react";

const useStyles = makeStyles((theme) => ({
  levelTitle: {
    transform: "rotate(-90deg)",
    width: 200,
  },
  levelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  sorting: {
    marginBottom: 70,
  },
}));
export default function Student() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" className={classes.sorting}>
        Order By
      </Typography>
      <div className={classNames(classes.levelContainer)}>
        <Typography variant="h3" className={classes.levelTitle}>
          Advanced
        </Typography>
        <Grid container direction="row-reverse">
          <Grid item xs={2}></Grid>
          {StudentsData ? (
            StudentsData.advanced.map((student) => (
              <Grid item xs={2}>
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
      </div>
      <div className={classNames(classes.levelContainer)}>
        <Typography variant="h3" className={classes.levelTitle}>
          Intermediate
        </Typography>
        <Grid container direction="row-reverse">
          <Grid item xs={2}></Grid>
          {StudentsData ? (
            StudentsData.intermediate.map((student) => (
              <Grid item xs={2}>
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
      </div>
      <div className={classNames(classes.levelContainer)}>
        <Typography variant="h3" className={classes.levelTitle}>
          Beginner
        </Typography>
        <Grid container direction="row-reverse">
          <Grid item xs={2}></Grid>
          {StudentsData ? (
            StudentsData.beginner.map((student) => (
              <Grid item xs={2}>
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
      </div>
    </div>
  );
}
