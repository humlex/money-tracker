import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import Balance from "../components/Balance/Balance";
import NavigationPannel from "../components/NavigationPannel/NavigationPannel";

const DashboardRoute: FC<RouteProps> = (props) => (
  <>
    <NavigationPannel />
    <Balance />
    <Route {...props} />
  </>
);

export default DashboardRoute;
