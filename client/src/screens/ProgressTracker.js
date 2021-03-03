import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { teacherRequestProgress } from "actions/teacherActions";
import Error from "components/Error";
import Loading from "components/Loading";
import { ProgressBar } from "components/ProgressBar/ProgressBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertStringtoArray } from "utils";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  studentCard: {
    borderRadius: "15px",
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 50,
  },
  button: {
    position: "absolute",
    right: 200,
    marginLeft: "auto",
  },
  name: {
    minWidth: 300,
  },
}));

export default function ProgressTracker() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const teacherProgress = useSelector((state) => state.teacherProgress);
  const { studentsInfo, loading, error } = teacherProgress;
  useEffect(() => {
    if (userInfo) {
      dispatch(teacherRequestProgress(userInfo.UserID));
    }
  }, [dispatch, userInfo]);
  return (
    <>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Button className={classes.button}>EXPORT AS SPREADSHEET</Button>.
          {studentsInfo && studentsInfo.beginnerData.length !== 0 ? (
            <>
              <Typography className={classes.title} variant="h3" align="left">
                BEGINNER
              </Typography>
              {studentsInfo.beginnerData.map((student) => (
                <Paper key={student.UserID} className={classes.studentCard}>
                  <div className={classes.name}>
                    <Typography variant="h4">
                      {student.FirstName} {student.LastName}
                    </Typography>
                    <Typography>
                      <span>{convertStringtoArray(student.Beginner).length}/15</span> Projects
                      Completed
                    </Typography>
                  </div>
                  <>
                    <ProgressBar
                      startNo={1}
                      end={15}
                      activeArray={convertStringtoArray(student.Beginner)}
                    />
                  </>
                </Paper>
              ))}
            </>
          ) : null}
          {studentsInfo && studentsInfo.intermediateData.length !== 0 ? (
            <>
              <Typography className={classes.title} variant="h3" align="left">
                Intermediate
              </Typography>
              {studentsInfo.intermediateData.map((student) => (
                <Paper key={student.UserID} className={classes.studentCard}>
                  <div className={classes.name}>
                    <Typography variant="h4">
                      {student.FirstName} {student.LastName}
                    </Typography>
                    <Typography>
                      <span>{convertStringtoArray(student.Intermediate).length}/15</span> Projects
                      Completed
                    </Typography>
                  </div>
                  <div>
                    <ProgressBar startNo={16} end={30} activeArray={student.Intermediate} />
                  </div>
                </Paper>
              ))}
            </>
          ) : null}
          {studentsInfo && studentsInfo.advancedData.length !== 0 ? (
            <>
              <Typography className={classes.title} variant="h3" align="left">
                Advanced
              </Typography>
              {studentsInfo.advancedData.map((student) => (
                <Paper key={student.UserID} className={classes.studentCard}>
                  <div className={classes.name}>
                    <Typography variant="h4">
                      {student.FirstName} {student.LastName}
                    </Typography>
                    <Typography>
                      <span>{convertStringtoArray(student.Advanced).length}/15</span> Projects
                      Completed
                    </Typography>
                  </div>
                  <div>
                    <ProgressBar startNo="31" end="45" activeArray={student.Advanced} />
                  </div>
                </Paper>
              ))}
            </>
          ) : null}
        </>
      )}
    </>
  );
}
