import DashBoard from "layouts/Dashboard";
import Main from "layouts/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/projects/:projectid" component={DashBoard} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}
