import React, { FC, useState } from "react";
import Charges from "../Charges/Charges";
import Incomes from "../Incomes/Incomes";

import "./index.scss";

const Tabs: FC<{}> = () => {
  const [tab, setTab] = useState("charts");
  const openCharts = () => setTab("charts");
  const openIncomes = () => setTab("incomes");

  return (
    <>
      <div className="Tabs">
        <div className="charts" onClick={openCharts}>
          Charts
        </div>
        <div className="incomes" onClick={openIncomes}>
          Incomes
        </div>
      </div>
      {tab === "charts" ? <Charges /> : <Incomes />}
    </>
  );
};

export default Tabs;
