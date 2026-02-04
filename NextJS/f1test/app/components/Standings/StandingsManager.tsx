"use client";
import React, { useState } from "react";
import StandingsTabs from "./StandingsTabs";
import ConstructorsTable from "./ConstructorsTable";
import DriversTable from "./DriversTable";

interface Props {
  driversData: any;
  constructorsData: any;
}

const StandingsManager = ({ driversData, constructorsData }: Props) => {
  const [activeTab, setActiveTab] = useState<"drivers" | "constructors">(
    "drivers",
  );

  const setTab = (tab: "drivers" | "constructors") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <StandingsTabs activeTab={activeTab} setActiveTab={setTab} />

      <div className="flex justify-center">
        {activeTab === "drivers" ? (
          <DriversTable data={driversData} />
        ) : (
          <ConstructorsTable data={constructorsData} />
        )}
      </div>
    </div>
  );
};

export default StandingsManager;
