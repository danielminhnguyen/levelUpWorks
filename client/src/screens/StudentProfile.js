import React, { useEffect } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { teacherProfileReq } from "actions/teacherActions";
import Loading from "components/Loading";
import { Redirect } from "react-router-dom";
import Error from "components/Error";

// TODO: fix flex wrap

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 200,
    margin: theme.spacing(3),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignContent: "center",
    borderRadius: "10%",
    padding: theme.spacing(2),
  },
  cardWrapper: {
    width: "100%",
    paddingLeft: theme.spacing(4),
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    overflowY: "auto",
    overflowX: "hidden",
  },
  image: {
    height: 120,
    width: 120,
  },
  name: {
    textTransform: "uppercase",
  },
}));

export default function StudentProfile(image) {
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

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : (
        <div className={classes.cardWrapper}>
          {studentsInfo
            ? studentsInfo.map((student) => (
                <Paper elevatio={4} key={student.UserID} classes={{ root: classes.card }}>
                  <div className="column">
                    <img className={classes.image} src={student.ProfilePic} alt="" />
                    <Typography className={classes.name} variant="h6">
                      {student.FirstName} {student.LastName}
                    </Typography>
                  </div>
                </Paper>
              ))
            : null}
        </div>
      )}
    </>
  );
}
