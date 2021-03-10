import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

const orange = "#F9B953";

const useStyles = makeStyles({
  background: {
    position: "relative",
    height: "200px",
    width: "200px",
    backgroundColor: orange,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  text: {
    position: "relative",
    bottom: "170px",
    fontSize: "1.7em",
    fontWeight: "300",
  },
});

export default function Logo() {
  const classes = useStyles();

  const orangeBox = useSpring({
    config: { mass: 1, tension: 250, friction: 40 },
    from: { opacity: "0", right: "500px" },
    to: { opacity: "1", right: "0px" },
  });

  const levelOneFade = useSpring({
    config: { mass: 1, tension: 250, friction: 30 },
    from: { marginBottom: "1000px", left: "500px" },
    to: { marginBottom: "-150px", left: "92px" },
  });

  const levelTwoFade = useSpring({
    config: { mass: 2, tension: 250, friction: 25 },
    from: { opacity: "0", left: "500px" },
    to: { opacity: "0.6", left: "92px" },
  });

  const levelThreeFade = useSpring({
    config: { mass: 3, tension: 250, friction: 20 },
    from: { opacity: "0", left: "500px" },
    to: { opacity: "0.3", left: "92px" },
  });

  return (
    <div>
      <animated.div
        style={orangeBox}
        className={classes.background}
      ></animated.div>
      <animated.div style={levelThreeFade} className={classes.text}>
        LEVEL UP
      </animated.div>
      <animated.div style={levelTwoFade} className={classes.text}>
        LEVEL UP
      </animated.div>
      <animated.div style={levelOneFade} className={classes.text}>
        LEVEL UP <b>WORKS</b>
      </animated.div>
    </div>
  );
}
