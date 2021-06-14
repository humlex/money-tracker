import React, { FC } from "react";

import "./index.scss";

const Charges: FC<{}> = () => {
  return (
    <>
      <div className="Charges">
        <div className="left-part">
          <span className="title">My Charges</span>
          <select className="select">
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
          </select>
        </div>
        <div className="add-btn">Add more</div>
      </div>
    </>
  );
};

export default Charges;
