import { Button, Card, Checkbox, makeStyles, Typography } from "@material-ui/core";
import { teacherMarkRequests, teacherRequestStudent } from "actions/teacherActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { timeFormat, dateFormat } from "utils";
import { ReactComponent as Reply } from "assets/images/reply.svg";
import { ReactComponent as Tick } from "assets/images/tick.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },
  card: {
    minHeight: 60,
    width: "60vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  topControl: {
    display: "flex",
    flexDirection: "row",
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
  },
  button: {
    "& svg": {
      marginRight: theme.spacing(1),
    },
  },
  profilePic: {
    height: 40,
  },
}));

export default function HelpRequest() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const teacherHelpReq = useSelector((state) => state.teacherHelpReq);
  const { studentsInfo, loading, error } = teacherHelpReq;
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    if (userInfo) {
      dispatch(teacherRequestStudent(userInfo.UserID));
    }
  }, [dispatch, userInfo]);

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  const handleCheck = (event) => {
    const list = [...checkedList];
    if (event.target.checked === true) {
      list.push(event.target.name);
      setCheckedList(list);
    } else {
      list.pop(event.target.name.toString());
      setCheckedList(list);
    }
    console.log(checkedList);
  };

  const handleClick = () => {
    dispatch(teacherMarkRequests(checkedList));
    dispatch(teacherRequestStudent(userInfo.UserID));
  };

  return (
    <>
      <div className={classes.topControl}>
        <Typography align="left" variant="h3" className={classes.title}>
          HELP REQUEST
        </Typography>
        <div className={classes.grow}></div>
        <div className="row">
          <Button className={classes.button}>
            <Reply />
            DOWNLOAD FILES
          </Button>
          <Button className={classes.button} onClick={() => handleClick()}>
            <Tick />
            MARK AS DONE
          </Button>
        </div>
      </div>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : studentsInfo ? (
        <>
          {studentsInfo.map((student) => (
            <div className="row">
              <Checkbox name={student.UserID} color="default" onChange={handleCheck} />
              <Card className={classes.card}>
                <img className={classes.profilePic} src={student.ProfilePic} alt="" />
                <div className={classes.grow}>
                  {student.FirstName} needs help with {(student.Gender = "M" ? "his " : "her ")}
                  projects
                </div>
                <div className={classes.date}>
                  <div>{dateFormat(student.DateCreated)}</div>
                  <div>{timeFormat(student.DateCreated)}</div>
                </div>
              </Card>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}
