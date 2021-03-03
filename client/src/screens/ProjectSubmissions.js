import { Button, Card, Checkbox, makeStyles, Modal, Typography } from "@material-ui/core";
import { teacherMarkSubmission, teacherRequestSubmission } from "actions/teacherActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { timeFormat, dateFormat } from "utils";
import { ReactComponent as TickIcon } from "assets/images/tick.svg";
import { ReactComponent as DownloadIcon } from "assets/images/download.svg";
import { ReactComponent as ZoominIcon } from "assets/images/zoom.svg";

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
  submissionContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: theme.spacing(4),
  },
  projectImage: {
    height: 70,
    marginLeft: theme.spacing(3),
  },
  enlargeButton: {
    fontSize: "0.5rem",
    marginLeft: theme.spacing(3),
  },
  projectImageEnlarge: {
    height: 400,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ProjectSubmission() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const teacherSubmissionReq = useSelector((state) => state.teacherSubmissionReq);
  const { studentsInfo, loading, error } = teacherSubmissionReq;
  const [checkedList, setCheckedList] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (userInfo) {
      dispatch(teacherRequestSubmission(userInfo.UserID));
    }
  }, [dispatch, userInfo]);

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
    dispatch(teacherMarkSubmission(checkedList));
    dispatch(teacherRequestSubmission(userInfo.UserID));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.topControl}>
        <Typography variant="h3" align="left" className={classes.title}>
          PROJECT SUMBMISSION
        </Typography>
        <div className={classes.grow}></div>
        <div className="row">
          <Button className={classes.button}>
            <DownloadIcon />
            REPLY
          </Button>
          <Button className={classes.button} onClick={() => handleClick()}>
            <TickIcon />
            MARK AS DONE
          </Button>
        </div>
      </div>
      {loading ? (
        <Loading open={loading} />
      ) : error ? (
        <Error />
      ) : studentsInfo ? (
        studentsInfo.map((student) => (
          <div className="row">
            {student.DateSubmitted !== null ? (
              <>
                <Checkbox name={student.ID} color="default" onChange={handleCheck} />
                <Card className={classes.card}>
                  <img className={classes.profilePic} src={student.ProfilePic} alt="" />
                  <div className={classes.grow}>
                    <div className={classes.submissionContent}>
                      <div>
                        {student.FirstName} submitted {(student.Gender = "M" ? "his" : "her")}{" "}
                        projects
                      </div>
                      <Button>
                        <div className="column">
                          <img className={classes.projectImage} src={student.Submission} alt="" />
                          <Button className={classes.enlargeButton} onClick={handleOpen}>
                            <ZoominIcon />
                            Enlarge Photo
                          </Button>
                          <Modal className={classes.modal} open={open} onClose={handleClose}>
                            <img
                              className={classes.projectImageEnlarge}
                              src={student.Submission}
                              alt=""
                            />
                          </Modal>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className={classes.date}>
                    <div>{dateFormat(student.DateStarted)}</div>
                    <div>{timeFormat(student.DateStarted)}</div>
                  </div>
                </Card>
              </>
            ) : student.DateSubmitted === null && student.ShowRequest === 1 ? (
              <>
                <Checkbox name={student.ID} color="default" onChange={handleCheck} />
                <Card className={classes.card}>
                  <img className={classes.profilePic} src={student.ProfilePic} alt="" />
                  <div className={classes.grow}>
                    <div className={classes.submissionContent}>
                      {student.FirstName} want to show {student.Gender === "M" ? "his" : "her"}{" "}
                      projects
                    </div>
                  </div>
                  <div className={classes.date}>
                    <div>{dateFormat(student.DateStarted)}</div>
                    <div>{timeFormat(student.DateStarted)}</div>
                  </div>
                </Card>
              </>
            ) : null}
          </div>
        ))
      ) : null}
    </>
  );
}
