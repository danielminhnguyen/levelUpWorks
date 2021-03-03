import {
  Box,
  Button,
  Input,
  makeStyles,
  Select,
  Table,
  TableCell,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { birthDayFormat } from "utils";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    borderRadius: "20px",
    margin: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  button: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    minWidth: 150,
    marginBottom: theme.spacing(2),
  },
  photo: {
    marginTop: theme.spacing(4),
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
  },
  label: {
    fontSize: "1.4rem !important",
    fontWeight: 700,
    color: "#A5A5A5",
    minWidth: 250,
  },
  buttonCancel: {
    minWidth: 150,
    marginBottom: theme.spacing(2),
    color: theme.palette.warning.secondary,
    borderColor: theme.palette.warning.secondary,
  },
  containerInfo: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    borderRadius: "20px",
    minHeight: 500,
    minWidth: 550,
    margin: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonWrapper: {
    "& button": {
      margin: theme.spacing(4),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  root: {
    borderBottom: "none",
    fontSize: "1.2rem",
  },
}))(TableCell);

export default function Profile() {
  const classes = useStyles();
  const userSignin = useSelector((state) => state.userSignin);
  const [prevState, setPrevState] = useState({});
  const { userInfo } = userSignin;
  const isStudent = userInfo.Role === "student";
  const [isEditMode, setIsEditMode] = useState(false);

  const birthday = birthDayFormat(userInfo.DateOfBirth);
  const [info, setInfo] = useState({
    school: userInfo.School,
    course: userInfo.CoursePurchased,
    dateofbirth: birthday,
    contact: userInfo.ContactNumber,
    email: userInfo.Email,
    teacher: `${userInfo.FirstName} ${userInfo.LastName}`,
  });
  const [editButton, setEditButton] = useState("Edit Profile");

  const handleChange = (id) => (event) => {
    setInfo({ ...info, [id]: event.target.value });
  };

  const handleEditButton = () => {
    switch (editButton) {
      case "Cancel":
        setEditButton("Edit Profile");
        setIsEditMode(false);
        setInfo(prevState);
        break;
      case "Edit Profile":
        setPrevState({ ...info });
        setIsEditMode(true);
        setEditButton("Cancel");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.content}>
        <div className="row">
          <Box boxShadow={4} className={`column ${classes.container}`}>
            <img className={classes.photo} src={userInfo.ProfilePic} alt="" />
            <Button
              className={editButton === "Cancel" ? classes.buttonCancel : classes.button}
              variant="outlined"
              onClick={handleEditButton}
            >
              {editButton}
            </Button>
            <Button className={classes.button} variant="outlined">
              Change Photo{" "}
            </Button>
            <Button className={classes.button} variant="outlined">
              Settings
            </Button>
          </Box>

          <Box boxShadow={4} className={classes.containerInfo}>
            <Typography variant="h2">
              {userInfo.FirstName} {userInfo.FirstName}
            </Typography>
            <Table padding="none">
              <TableRow>
                <StyledTableCell className={classes.label}>School</StyledTableCell>
                <StyledTableCell>
                  {isEditMode ? (
                    <Input value={info.teacher} onChange={handleChange("school")} />
                  ) : (
                    info.school
                  )}
                </StyledTableCell>
              </TableRow>
              {userInfo ? (
                isStudent ? (
                  <TableRow>
                    <StyledTableCell className={classes.label}>Teacher</StyledTableCell>
                    <StyledTableCell>
                      {userInfo.TeacherFirstName} {userInfo.TeacherLastName}
                    </StyledTableCell>
                  </TableRow>
                ) : null
              ) : null}

              <TableRow>
                <StyledTableCell className={classes.label}>
                  {isStudent ? "Course" : "Course Purchased"}
                </StyledTableCell>
                <StyledTableCell>
                  {isEditMode ? (
                    <Select value={info.course} onChange={handleChange("course")}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </Select>
                  ) : (
                    info.course
                  )}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell className={classes.label}>Date of Birth</StyledTableCell>
                <StyledTableCell>
                  {isEditMode ? (
                    <Input value={info.dateofbirth} onChange={handleChange("dateofbirth")} />
                  ) : (
                    info.dateofbirth
                  )}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell className={classes.label}>Contact No</StyledTableCell>
                <StyledTableCell>
                  {isEditMode ? (
                    <Input value={info.contact} onChange={handleChange("contact")} />
                  ) : (
                    info.contact
                  )}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell className={classes.label}>Email Address</StyledTableCell>
                <StyledTableCell>
                  {isEditMode ? (
                    <Input value={info.email} onChange={handleChange("email")} />
                  ) : (
                    info.email
                  )}
                </StyledTableCell>
              </TableRow>
            </Table>
            {editButton === "Cancel" ? (
              <Button variant="contained" color="primary">
                Submit Changes
              </Button>
            ) : null}
          </Box>
        </div>
        <div className={classes.buttonWrapper}>
          <Link to="/projects">
            <Button className="button-one" variant="contained">
              Back to Projects
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button color="secondary" variant="contained">
              Back to Dash Board
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
