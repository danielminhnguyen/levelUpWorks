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
import { motion } from "framer-motion";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { ProjectData } from "constants/data";
import { useDispatch, useSelector } from "react-redux";
import { teacherProfileReq } from "actions/teacherActions";
import Error from "components/Error";
import ProjectCard from "components/ProjectCard";

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

export default function Projects() {
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
          <Grid item xs={6} className={classNames(classes.welcome, "column")}>
            <div className={classes.backDrop}>
              <BackDrop />
            </div>
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h2" align="left">
                  Welcome Back Alan!
                </Typography>
              </motion.h2>
              <Typography variant="h5" align="left" className="row">
                <MailOutlineIcon /> 5 new nofitications
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} className="flex-column-end"></Grid>

          <Grid item xs={4} className={classNames(classes.location)}>
            <Typography variant="h4" className={classes.locationTitle}>
              Beginner
            </Typography>

            <Grid container>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Level <= 10)
                  .map((student) => (
                    <Grid item xs={12}>
                      <ProjectCard
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
          <Grid item xs={4} className={classNames(classes.location)}>
            <Typography variant="h4" className={classes.locationTitle}>
              Intermediate
            </Typography>
            <Grid container>
              {studentsInfo ? (
                studentsInfo
                  .filter(
                    (student) => student.Level > 10 && student.Level <= 20
                  )
                  .map((student) => (
                    <Grid item xs={12}>
                      <ProjectCard
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
          <Grid item xs={4} className={classNames(classes.location)}>
            <Typography variant="h4" className={classes.locationTitle}>
              Intermediate
            </Typography>
            <Grid container>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Level > 20)
                  .map((student) => (
                    <Grid item xs={12}>
                      <ProjectCard
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
