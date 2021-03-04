import DashBoard from "layouts/Dashboard";
import Main from "layouts/Main";
import Student from "mission6/Student";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "screens/Profile";

export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/dashboard" component={DashBoard} />
        <Route path="/projects/:projectid" component={DashBoard} />
        <Route path="/" component={Main} /> */}

        <Route exact path="/student" component={Student} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}
