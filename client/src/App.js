import DashBoard from "layouts/Dashboard";
// import Main from "layouts/Main";
import Student from "mission6/Student";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "mission6/Profile";
// import Home from "layouts/Home";
import Login from "./mission6/Login";

export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/dashboard" component={DashBoard} />
        <Route path="/projects/:projectid" component={DashBoard} />
        <Route path="/" component={Main} /> */}
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}
