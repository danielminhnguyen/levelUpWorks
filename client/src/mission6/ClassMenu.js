import {
  Button,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React, { useEffect } from "react";

import { ReactComponent as BackDrop } from "assets/img/backdrop.svg";
import classNames from "classnames";
import StudentCard from "components/StudentCard";

// import { ProjectData } from "constants/data";
import { useDispatch, useSelector } from "react-redux";
import { teacherProfileReq } from "actions/teacherActions";
import Error from "components/Error";

const useStyles = makeStyles((theme) => ({
  backDrop: {
    position: "absolute",
    zIndex: -1,
  },
  welcome: {
    height: 300,
    overflow: "hidden",
  },
  location: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  locationTitle: {
    fontWeight: 900,
  },
}));

export default function ClassMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const teacherReqProfile = useSelector((state) => state.teacherReqProfile);
  const { studentsInfo, loading, error } = teacherReqProfile;

  useEffect(() => {
    if (userInfo) {
      dispatch(teacherProfileReq(userInfo.UserID));
    }
  }, [dispatch, userInfo]);

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : loading ? (
        <LinearProgress />
      ) : (
        <Grid container>
          <Grid item xs={6} className={classNames(classes.location)}>
            <Typography
              variant="h4"
              className={classes.locationTitle}
              align="center"
            >
              Botany Downs Library
            </Typography>

            <Grid container>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Class === "botany")
                  .map((student) => (
                    <Grid item xs={4}>
                      <StudentCard
                        studentInfo={student}
                        teacherInfo={userInfo}
                        name={`${student.FirstName} ${student.LastName}`}
                        level={student.Level}
                        image={student.ProfilePic}
                      />
                    </Grid>
                  ))
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
          <Grid item xs={6} className={classNames("column", classes.location)}>
            <Typography
              variant="h4"
              className={classes.locationTitle}
              align="center"
            >
              Epsom Girls Grammar School
            </Typography>
            <Grid container>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Class === "epsom")
                  .map((student) => (
                    <Grid item xs={4}>
                      <StudentCard
                        studentInfo={student}
                        teacherInfo={userInfo}
                        name={`${student.FirstName} ${student.LastName}`}
                        level={student.Level}
                        image={student.ProfilePic}
                      />
                    </Grid>
                  ))
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
