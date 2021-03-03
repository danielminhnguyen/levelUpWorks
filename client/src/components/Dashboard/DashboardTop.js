import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

//material ui
import { AppBar, Button, makeStyles } from "@material-ui/core";

// graphics
import FlagNZ from "assets/images/nz-flag.png";
import FlagMaori from "assets/images/maori-flag.png";
import logo from "assets/images/logo-dark.png";

//components
import { ProgressBarTop } from "components/ProgressBar/ProgressBar";

const useStyles = makeStyles((theme) => ({
  appbar: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1,
    padding: "0px" + theme.spacing,
  },
  logo: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
  },
  buttonsWrapper: {
    "& button": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "#E5AB2C",
    color: "#ffffff",
  },
  grow: {
    flexGrow: 1,
  },
  language: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(4),
    "& *": {
      marginLeft: theme.spacing(1),
    },
  },
}));

DashboardTop.propTypes = {
  layout: PropTypes.string,
};

export default function DashboardTop(props) {
  const location = useLocation();
  const sideLayout = location.pathname.split("/")[1];
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appbar}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt=""></img>
      </Link>
      <div className={`row ${classes.grow}`}>
        {sideLayout === "projects" ? (
          <>
            <div>
              <p gutterBottom={true} variant="h4">
                PROJECT
              </p>
              <p>Introduction</p>
            </div>
            <div>
              <span>1</span>
              <div>
                <ProgressBarTop repeat={12} />
              </div>
            </div>
          </>
        ) : null}
        <div className={classes.grow}></div>
        <div className={classes.buttonsWrapper}>
          <Button variant="contained" className={classes.button}>
            Take Screenshot
          </Button>
          <Button variant="contained" color="secondary">
            Ask Teacher for help
          </Button>
          <Button variant="contained" color="primary">
            <Link to={`/${props.layout}/projects`}>More Projects</Link>
          </Button>
        </div>
      </div>
      <div className={classes.language}>
        <img src={FlagNZ} alt="language"></img>
        <img src={FlagMaori} alt="language"></img>
      </div>
    </AppBar>
  );
}
