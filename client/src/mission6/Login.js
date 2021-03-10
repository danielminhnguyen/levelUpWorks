import React, { useState } from "react";
import {
  FormControlLabel,
  makeStyles,
  Radio,
  TextField,
  RadioGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "aos/dist/aos";
import { signin } from "actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Error from "components/Error";
import { Redirect } from "react-router";

const lightGreyColor = "#F0F0F0";
const orangeColor = "#F9B953";

const useStyles = makeStyles({
  mainDiv: {
    width: "30vw",
    height: "auto",
    padding: "30px 0px 30px 0px",
    backgroundColor: lightGreyColor,
    borderRadius: "8px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    marginTop: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "35vh",
    "& > *": {
      marginTop: "10px",
    },
    marginBottom: "20px",
  },
  materialInput: {
    width: "20vw",
    height: "5vh",
    margin: "15px",
    borderRadius: "8px",
  },
  materialButton: {
    backgroundColor: orangeColor,
    width: "10vw",
    fontWeight: "600",
    color: "black",
    marginTop: "20px",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    position: "relative",
    left: "240px",
    fontSize: "3em",
    color: "grey",
  },
});

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("alan@levelup.com");
  const [password, setPassword] = useState("abcd1234");
  const [role, setRole] = useState("teacher");

  const userSignin = useSelector((state) => state.userSignin);
  const { error, userInfo } = userSignin;

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      dispatch(signin(email.trim(), password.trim(), role));
    } else {
      alert("Password and username are not matched");
    }
  };

  if (userInfo) {
    return <Redirect to="/dashboard" />;
  }

  // const handleSubmit = () => {};
  // const handleSubmit = () => {
  //   axios
  //     .post(`${API_URL}/signin`, {
  //       email: email,
  //       password: password,
  //       role: role,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  // AOS.init();

  return (
    <div>
      <div className={classes.welcome}>
        <div className={classes.logoText}>
          <div data-aos="fade-right" style={{ opacity: 0.3 }}>
            LEVEL UP
          </div>
          <div data-aos="fade-right" style={{ opacity: 0.6 }}>
            LEVEL UP
          </div>
          <div data-aos="fade-right">
            LEVEL UP <b style={{ color: "black" }}>WORKS</b>
          </div>
        </div>
        <div
          data-aos="fade-left"
          style={{
            borderRadius: "8px",
            height: "300px",
            width: "300px",
            backgroundColor: orangeColor,
            position: "relative",
            right: "230px",
            zIndex: "-1",
          }}
        />
      </div>
      <div className={classes.mainDiv}>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <div style={{ fontWeight: "400", fontSize: "1.5em", color: "grey" }}>
            Log in to start Leveling Up!
          </div>
          <div className={classes.formDiv}>
            <TextField
              type="text"
              className={classes.materialInput}
              label="Enter Email or Username"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              className={classes.materialInput}
              type="password"
              label="Enter Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div style={{ fontWeight: "400", fontSize: "1.3em", color: "grey" }}>
            What is your Role?
          </div>
          <RadioGroup
            name="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            style={{ display: "inline" }}
          >
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="Teacher"
              style={{ color: "grey" }}
            />
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
              style={{ color: "grey" }}
            />
          </RadioGroup>
          <Button className={classes.materialButton} type="submit">
            Log In
          </Button>
        </form>
      </div>
      {error ? <Error message={error} /> : null}
    </div>
  );
}
