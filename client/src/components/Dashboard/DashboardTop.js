import React from "react";
// import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

//material ui
import {
  AppBar,
  Badge,
  Box,
  Button,
  fade,
  IconButton,
  InputBase,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

// graphics
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { ReactComponent as CalendarIcon } from "assets/img/calendar-icon.svg";
import { useDispatch } from "react-redux";
import { signout } from "actions/userActions";
//components

const useStyles = makeStyles((theme) => ({
  appbar: {
    paddingTop: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: theme.zIndex.drawer + 1,
    paddingRight: theme.spacing(5),
  },
  logo: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    border: "solid 1px black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    border: "solid 2px black",
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  profilePhoto: {
    marginLeft: theme.spacing(5),
  },
  expanded: {
    position: "absolute",
    transform: "translateY(80%)",
  },
  dropDownMenu: {
    transform: "translateY(60px)",
  },
}));

DashboardTop.propTypes = {
  layout: PropTypes.string,
};

export default function DashboardTop(props) {
  // const location = useLocation();
  // const sideLayout = location.pathname.split("/")[1];
  const classes = useStyles();
  const { userInfo } = props;

  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      className={classes.dropDownMenu}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Settings</MenuItem>
      <MenuItem onClick={handleClose}>Plugins</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="fixed"
      className={classes.appbar}
    >
      <div className={`row ${classes.grow}`}>
        <div className={classes.grow}></div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={16} color="secondary">
            <NotificationsNoneIcon fontSize="large" />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <CalendarIcon />
        </IconButton>

        <IconButton className="column" onClick={handleMenu}>
          <Typography variant="h5" color="text.primary">
            Howdy {userInfo.FirstName}
          </Typography>
          <div className={classes.expanded}>
            <ExpandMoreIcon />
          </div>
        </IconButton>
        <div className={classes.profilePhoto}>
          <img src={userInfo.ProfilePic} alt="" />
        </div>
      </div>
      {renderMenu}
    </AppBar>
  );
}
