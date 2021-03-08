import {
  CircularProgress,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { teacherProfileReq } from "actions/teacherActions";
import classNames from "classnames";
import StudentCard from "components/StudentCard";
import { ProjectData, StudentsData } from "constants/data";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  levelTitle: {
    transform: "rotate(-90deg)",
    width: 200,
    height: 200,
    marginLeft: 50,
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
    <div>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Typography variant="h5" className={classes.sorting}>
            Order By
          </Typography>
          <div className={classNames(classes.levelContainer)}>
            <Typography variant="h3" className={classes.levelTitle}>
              Advanced
            </Typography>
            <Grid container direction="row-reverse">
              <Grid item xs={2}></Grid>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Level > 20)
                  .map((student) => (
                    <Grid item xs={2}>
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
          </div>
          <div className={classNames(classes.levelContainer)}>
            <Typography variant="h3" className={classes.levelTitle}>
              Intermediate
            </Typography>
            <Grid container direction="row-reverse">
              <Grid item xs={2}></Grid>
              {studentsInfo ? (
                studentsInfo
                  .filter(
                    (student) => student.Level > 10 && student.Level <= 20
                  )
                  .map((student) => (
                    <Grid item xs={2}>
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
          </div>
          <div className={classNames(classes.levelContainer)}>
            <Typography variant="h3" className={classes.levelTitle}>
              Beginner
            </Typography>
            <Grid container direction="row-reverse">
              <Grid item xs={2}></Grid>
              {studentsInfo ? (
                studentsInfo
                  .filter((student) => student.Level <= 10)
                  .map((student) => (
                    <Grid item xs={2}>
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
          </div>
        </>
      )}
    </div>
  );
}
