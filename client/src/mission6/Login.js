import React, { useState } from "react";
import {
  FormControlLabel,
  makeStyles,
  Radio,
  TextField,
  RadioGroup,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { signin } from "actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Error from "components/Error";
import { Redirect } from "react-router";
import "./Login.css";
import { useSpring, animated } from "react-spring";

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
});

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("alan@levelup.com");
  const [password, setPassword] = useState("abcd1234");
  const [role, setRole] = useState("teacher");

  const userSignin = useSelector((state) => state.userSignin);
  const { error, userInfo } = userSignin;

  // React Springs
  const levelOneFade = useSpring({
    config: { mass: 1, tension: 170, friction: 30 },
    from: { opacity: 1, right: "230px" },
    to: { opacity: 1, right: "0" },
  });
  const levelTwoFade = useSpring({
    config: { mass: 2, tension: 180, friction: 37 },
    from: { opacity: 0.0, top: "100px" },
    to: { opacity: 0.6, top: "0px" },
  });
  const levelThreeFade = useSpring({
    config: { mass: 3, tension: 300, friction: 45 },
    from: { opacity: 0.0, top: "200px" },
    to: { opacity: 0.3, top: "0px" },
  });
  const orangeBoxFade = useSpring({
    config: { mass: 2, tension: 270, friction: 30 },
    from: { opacity: 0, right: "0px" },
    to: { opacity: 1, right: "230px" },
  });
  const fadeIn = useSpring({
    config: { clamp: true, mass: 10, tension: 270, friction: 50 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

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
  return (
    <div>
      <div className="welcome">
        <div className="logoText">
          <animated.div style={levelThreeFade}>LEVEL UP</animated.div>
          <animated.div style={levelTwoFade}>LEVEL UP</animated.div>
          <animated.div style={levelOneFade}>
            LEVEL UP <b style={{ color: "black" }}>WORKS</b>
          </animated.div>
        </div>
        <animated.div style={orangeBoxFade} className="orangeBox" />
      </div>
      <animated.div style={fadeIn} className={classes.mainDiv}>
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
<<<<<<< HEAD
      </div>
=======
        {/* {errMessage ? <Error message={errMessage} /> : null} */}
      </animated.div>
>>>>>>> 396c18801acf023556245a2b5282cca418d3db4c
      {error ? <Error message={error} /> : null}
    </div>
  );
}
