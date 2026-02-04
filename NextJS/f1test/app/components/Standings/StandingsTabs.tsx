import React from "react";

interface Props {
  activeTab: "drivers" | "constructors";
  setActiveTab: (tab: "drivers" | "constructors") => void;
}

const StandingsTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex w-screen justify-between">
      <div className="flex w-[50vw] p-[20px] justify-center">
        <button
          onClick={() => setActiveTab("drivers")}
          className={`w-[150px] px-[20px] py-[10px] rounded-[25px] border-2 border-victory-white ${activeTab === "drivers" ? "bg-racing-red" : "bg-carbon-fiber"} cursor-pointer`}
        >
          Drivers
        </button>
      </div>
      <div className="flex w-[50vw] p-[20px] justify-center">
        <button
          onClick={() => setActiveTab("constructors")}
          className={`px-[20px] py-[10px] rounded-[25px] border-2 border-victory-white bg-carbon-fiber ${activeTab === "constructors" ? "bg-racing-red" : "bg-carbon-fiber"} cursor-pointer`}
        >
          Constructors
        </button>
      </div>
    </div>
  );
};

export default StandingsTabs;
