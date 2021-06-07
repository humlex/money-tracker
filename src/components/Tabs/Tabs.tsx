import React, { FC, useState } from "react";

import "./index.scss";

const Tabs: FC<{}> = () => {
  return (
    <div className="Tabs">
      <div className="charts">Charts</div>
      <div className="incomes">Incomes</div>
    </div>
  );
};

export default Tabs;
