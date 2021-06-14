import React, { FC } from "react";

import "./index.scss";

const Incomes: FC<{}> = () => {
  return (
    <>
      <div className="navigation">
        <div className="title">My Incomes</div>
        <input className="select" type="select" />
        <div className="add-btn">Add more</div>
      </div>
    </>
  );
};

export default Incomes;
