import React, { FC } from "react";
import { Link } from "react-router-dom";
import { BofiIcon } from "./icons";

import "./index.scss";

const NavigationPannel: FC<{}> = () => {
  return (
    <nav className="NavigationPannel">
      <div className="logo">
        <BofiIcon />
        <span className="logo__name">MoneyTracker</span>
      </div>
      <div className="link__section">
        <ul className="nav__list">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/charts">Charts</Link>
          </li>
          <li className="link">
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationPannel;
