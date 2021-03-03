import React, { useState } from "react";

import student from "assets/images/modal-student.png";
import teacher from "assets/images/modal-teacher.png";
import { Button, Dialog, Grid, Typography } from "@material-ui/core";
// import Alert from "@material-ui/lab/Alert";

import Tabs from "components/Tabs";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { register, signin } from "actions/userActions";
import useStyles from "./styles";
import { nameExtract, validateEmail } from "utils";
import Error from "components/Error";

// TODO: message only appear first time

export default function ModalLoginSignup(props) {
  const classes = useStyles();
  const { show, request, close } = props;
  const [errMessage, setErrMessage] = useState();
  const userSignin = useSelector((state) => state.userSignin);
  const { error } = userSignin;

  const [value, setValue] = useState({
    teacherSigninEmail: "teacher@test.com",
    teacherSigninPassword: "abc123",
    teacherRegisterFullname: null,
    teacherRegisterEmail: null,
    teacherRegisterPassword: null,
    teacherRegisterRepeatPassword: null,
    studentSigninEmail: "student@test.com",
    studentSigninPassword: "abc123",
    studentRegisterFullname: null,
    studentRegisterEmail: null,
    studentRegisterPassword: null,
    studentRegisterRepeatPassword: null,
  });

  const inputHandleChange = (item) => (event) => {
    setValue({ ...value, [item]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleLogin = (role) => {
    let email = value[`${role}SigninEmail`];
    let password = value[`${role}SigninPassword`];
    if (email && password) {
      dispatch(signin(email.trim(), password.trim(), role));
    } else {
      alert("Password and username are not matched");
    }
  };

  const handleRegister = (role) => {
    let password = value[`${role}RegisterPassword`];
    let confirmPassword = value[`${role}RegisterRepeatPassword`];
    let fullname = value[`${role}RegisterFullname`];
    let email = value[`${role}RegisterEmail`];
    console.log(password, confirmPassword, fullname, email);
    if (password !== "" && confirmPassword !== "" && fullname !== "" && email !== "") {
      setErrMessage("Please enter all required fields");
      return;
    }

    if (fullname.indexOf(" ") < 0) {
      setErrMessage("Please enter full name");
      return;
    }

    let [firstname, lastname] = nameExtract(fullname);

    if (!validateEmail(email)) {
      setErrMessage("Email must have format example@example.com");
      return;
    }

    if (password === "" || confirmPassword === "") {
      setErrMessage("Passwords cannot be empty");
      return;
    }

    if (password.length <= 8 || confirmPassword <= 8) {
      setErrMessage("Password must be over 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setErrMessage("Password and confirm password are not matched");
      return;
    }

    dispatch(register(firstname, lastname, email, password, role));
  };

  return (
    <div>
      {errMessage ? <Error message={errMessage} /> : null}
      {error ? <Error message={error} /> : null}
      <Dialog
        classes={{ paper: classes.dialogContainer }}
        open={show}
        onClose={close}
        disableScrollLock={false}
      >
        <Grid container spacing={4}>
          <Grid item xs={6} className="column-start">
            <div id="login-signup-switch">
              <img className={classes.image} src={student} alt="" />
              <Typography variant="h2">Students</Typography>
              <Tabs setactive={request}>
                <div label="Login">
                  <input
                    className={classes.input}
                    value={value.studentSigninEmail}
                    type="email"
                    onChange={inputHandleChange("studentSigninEmail")}
                    placeholder="email"
                  />
                  <input
                    className={classes.input}
                    value={value.studentSigninPassword}
                    type="password"
                    placeholder="password"
                    onChange={inputHandleChange("studentSigninPassword")}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleLogin("student")}
                  >
                    Login
                  </Button>
                </div>
                <div label="Sign Up">
                  <input
                    className={classes.input}
                    value={value.studentRegisterFullname}
                    type="fullname"
                    placeholder="fullname"
                    onChange={inputHandleChange("studentRegisterFullname")}
                  />
                  <input
                    className={classes.input}
                    value={value.studentRegisterEmail}
                    type="email"
                    placeholder="email"
                    onChange={inputHandleChange("studentRegisterEmail")}
                  />
                  <input
                    className={classes.input}
                    value={value.studentRegisterPassword}
                    type="password"
                    placeholder="password"
                    onChange={inputHandleChange("studentRegisterPassword")}
                  />
                  <input
                    className={classes.input}
                    value={value.studentRegisterRepeatPassword}
                    type="password"
                    placeholder="confirm password"
                    onChange={inputHandleChange("studentRegisterRepeatPassword")}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRegister("student")}
                  >
                    Sign Up
                  </Button>
                </div>
              </Tabs>
            </div>
          </Grid>
          <Grid className="column-start" item xs={6}>
            <img className={classes.image} src={teacher} alt="" />
            <div id="login-signup-switch">
              <Typography variant="h2">Teachers</Typography>
              <Tabs setactive={request}>
                <div label="Login">
                  <input
                    className={classes.input}
                    value={value.teacherSigninEmail}
                    type="email"
                    placeholder="email"
                    onChange={inputHandleChange("teacherSigninEmail")}
                  />
                  <input
                    className={classes.input}
                    type="password"
                    placeholder="password"
                    value={value.teacherSigninPassword}
                    onChange={inputHandleChange("teacherSigninPassword")}
                  />
                  <Button
                    onClick={() => handleLogin("teacher")}
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                </div>
                <div className={classes.inputContainer} label="Sign Up">
                  <input
                    className={classes.input}
                    value={value.teacherRegisterFullname}
                    onChange={inputHandleChange("teacherRegisterFullname")}
                    type="fullname"
                    placeholder="fullname"
                  />
                  <input
                    className={classes.input}
                    value={value.teacherRegisterEmail}
                    type="email"
                    onChange={inputHandleChange("teacherRegisterEmail")}
                    placeholder="email"
                  />
                  <input
                    className={classes.input}
                    value={value.teacherRegisterPassword}
                    onChange={inputHandleChange("teacherRegisterPassword")}
                    type="password"
                    placeholder="password"
                  />
                  <input
                    className={classes.input}
                    value={value.teacherRegisterRepeatPassword}
                    onChange={inputHandleChange("teacherRegisterRepeatPassword")}
                    type="password"
                    placeholder="confirm password"
                  />
                  <Button
                    onClick={() => handleRegister("teacher")}
                    variant="contained"
                    color="secondary"
                  >
                    Sign Up
                  </Button>
                </div>
              </Tabs>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

ModalLoginSignup.propTypes = {
  show: PropTypes.bool,
  request: PropTypes.string,
  close: PropTypes.func,
};
