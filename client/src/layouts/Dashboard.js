import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";

import { DashboardTop, DashboardBottom, DashboardSide } from "components/Dashboard";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation, useParams } from "react-router-dom";
import { Routes } from "constants/Routes";
import { projectbuilder } from "actions/projectActions";

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
    height: "80vh",
    width: "100%",
    margin: theme.spacing(6),
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.light,
    borderRadius: "40px",
  },
  content: {
    width: "100%",
    // height: "75vh",
    overflowX: "hidden",
    margin: theme.spacing(0),
  },
  middle: {
    position: "relative",
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
}));

export default function DashBoard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const sideLayout = location.pathname.split("/")[1];
  // const projectid = props.match.params.projectid;
  const { projectid } = useParams();
  // fetching user dashboard and layout
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  let role;
  if (userInfo) {
    role = userInfo.Role;
  }
  const routes = Routes.filter(({ user, layout }) => user === role && layout === sideLayout);

  console.log("params" + projectid);
  useEffect(() => {
    if (projectid) {
      dispatch(projectbuilder(projectid));
    }
  }, [dispatch, projectid]);

  // console.log(projectid);
  //first tab value from routes
  let firstTab = 999;
  if (routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id < firstTab) {
        firstTab = routes[i].id;
      }
    }
  }

  const [activeTab, setActiveTab] = useState(firstTab);

  // console.log(routes.find(({ id }) => id === activeTab));
  // Return to dashboad if user not logged in
  if (!userInfo) {
    return <Redirect to="/" />;
  }

  const handleTabClick = (tab_id) => {
    setActiveTab(tab_id);
  };

  return (
    <div className={classes.dashboard}>
      <DashboardTop />
      <div className={classes.fakeToolbar}></div>
      <div className="row-start">
        <DashboardSide tabClick={handleTabClick} routes={routes} firstTab={firstTab} />
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            {routes ? routes.find(({ id }) => id === activeTab).component : null}
          </div>
        </div>
      </div>
      <div className={classes.fakeToolbar}></div>
      <DashboardBottom />
    </div>
  );
}
