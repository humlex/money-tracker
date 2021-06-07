import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import Home from "../pages/Home/Home";
import Charts from "../pages/Charts/Charts";
import Categories from "../pages/Categories/Categories";

const RootRouter = () => (
  <Router>
    <Switch>
      <DashboardRoute exact path="/" component={Home} />
      <DashboardRoute exact path="/charts" component={Charts} />
      <DashboardRoute exact path="/categories" component={Categories} />
    </Switch>
  </Router>
);

export default RootRouter;
