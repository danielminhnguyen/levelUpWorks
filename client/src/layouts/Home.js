import { makeStyles } from "@material-ui/core";
import { DashboardBottom, DashboardTop } from "components/Dashboard";
// import NavigationSide from "components/NavigationSide/NavigationSide";

import { ReactComponent as Logo } from "assets/img/logo.svg";

import React, { useState } from "react";
import ModalLoginSignup from "components/ModalLoginSignup/ModalLoginSignup";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    backgroundColor: theme.palette.background.main,
    height: "100vh",
    width: "100vw",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 250,
    height: "80vh",
    width: "100%",
    margin: theme.spacing(6),
    padding: theme.spacing(6),
    // backgroundColor: theme.palette.background.light,
    borderRadius: "40px",
  },
  content: {
    width: "100%",
    // height: "75vh",
    // overflowX: "hidden",
    margin: theme.spacing(0),
  },
  middle: {
    position: "relative",
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  logo: {
    position: "absolute",
    top: 0,
    marginLeft: 100,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [modalOpen, setmodalOpen] = useState(false);

  // const openModal = (event) => {
  //   setmodalOpen(true);
  // };

  const ModalClose = () => {
    setmodalOpen(false);
  };

  return (
    <div className={classes.dashboard}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <DashboardTop />
      <div className={classes.fakeToolbar}></div>
      <div className="row-start"></div>
      <div className={classes.fakeToolbar}></div>
      <DashboardBottom />
      <ModalLoginSignup show={modalOpen} close={ModalClose} />
    </div>
  );
}
