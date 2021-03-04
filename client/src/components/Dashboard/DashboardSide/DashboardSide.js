import React from "react";

// components
import classNames from "classnames";

// graphics
import { ReactComponent as Logo } from "assets/img/logo.svg";

// material ui
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fakeToolBar: {
    ...theme.mixins.toolbar,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  logo: {
    marginLeft: theme.spacing(5),
  },
  navigation: {
    marginTop: theme.spacing(15),
    paddingLeft: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    border: "none",
    backgroundColor: "transparent",
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#C4C4C4",
    borderRadius: "50%",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(3),
    "&:hover ~ $hide": {
      display: "block",
    },
    "&:hover": {
      backgroundColor: "#F9B953",
    },
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "left",
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
  active: {
    backgroundColor: "#F9B953",
  },
}));

export default function DashboardSide(props) {
  const classes = useStyles();
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  // const userInfo = {};
  // const dispatch = useDispatch();
  // const handleSignOut = () => {
  //   dispatch(signout());
  // };

  const { tabClick, routes, activeTab } = props;
  return (
    <>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.paper }}
        elevation={0}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.navigation}>
          <List>
            {routes.map((item) => (
              <div className={classes.navItem}>
                <div
                  key={item.id}
                  // autoFocus={item.id === firstTab ? true : false}
                  className={classNames(
                    classes.iconContainer,
                    "column",
                    activeTab === item.id ? classes.active : classes.nonActive
                  )}
                  onClick={() => tabClick(item.id)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </div>
                <ListItemText
                  className={classes.hide}
                  primary={
                    <Typography
                      className={classNames(classes.label)}
                      variant="h6"
                    >
                      {item.label}
                    </Typography>
                  }
                />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
