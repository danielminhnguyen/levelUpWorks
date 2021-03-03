import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// material ui
import { Popover, Typography, AppBar, Toolbar, Paper } from "@material-ui/core";
import useStyles from "./styles";

// pictures
import logo from "assets/images/logo-white.png";
import nzflag from "assets/images/nz-flag.png";
import maoriflag from "assets/images/maori-flag.png";
// import profilePhoto from "../../img/rawiri_profile.png";
import { signout } from "actions/userActions";

// TODO: handle user profile photo blob from SQL server

NavigationBar.propTypes = {
  modalClick: PropTypes.func,
};

export default function NavigationBar(props) {
  const location = useLocation();
  const layout = location.pathname.split("/")[1];

  const classes = useStyles();

  const { modalClick } = props;
  const [anchor, setAnchor] = useState(null);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handlePopoverOpen = (e) => {
    setAnchor(e.currentTarget);
    console.log(open);
  };

  const handlePopoverClose = () => {
    setAnchor(null);
  };

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signout());
  };
  // const open = Boolean(anchor);
  const open = Boolean(anchor);

  return (
    <AppBar
      color="primary"
      classes={{
        root: classes.appBarRoot,
      }}
      position="sticky"
    >
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Toolbar className={`row ${classes.toolBar}`}>
        <Typography variant="h3">
          <Link to="/">Home</Link>
        </Typography>
        {layout === "projects" ? (
          <Typography variant="h3">
            <Link to="/">Projects</Link>
          </Typography>
        ) : (
          <Typography variant="h3">
            <Link to="/">Features</Link>
          </Typography>
        )}

        <Typography variant="h3">
          <Link to="/dashboard">Teachers</Link>
        </Typography>
      </Toolbar>
      <div className={classes.subControl}>
        <div className="row-end">
          <span>LANG</span>
          <img src={nzflag} alt="" />
          <img src={maoriflag} alt="" />
        </div>
        {userInfo ? (
          <div
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <div className="row">
              <img className={classes.profilePhoto} src={userInfo.ProfilePic} alt="" />
              <Typography variant="h5">{`${userInfo.FirstName} ${userInfo.LastName}`}</Typography>
            </div>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchor}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              disableRestoreFocus
            >
              <Paper>
                <Link to="/profile">
                  <Typography variant="h4">My Profile</Typography>
                </Link>
                <Typography variant="h4">Settings</Typography>
                <Typography onClick={handleSignOut} variant="h4">
                  Log out
                </Typography>
              </Paper>
            </Popover>
          </div>
        ) : (
          <div className="row">
            <Typography variant="h5" onClick={() => modalClick("Sign Up")}>
              Register
            </Typography>
            <span> | </span>
            <Typography variant="h5" onClick={() => modalClick("Login")}>
              Login
            </Typography>
          </div>
        )}
      </div>
    </AppBar>
  );
}
