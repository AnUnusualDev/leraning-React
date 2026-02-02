import React from "react";
import { PageState } from "../page";
import Leaderboard from "./Leaderboard";

interface Props {
  appState: PageState;
}

const AppContent = ({ appState }: Props) => {
  return (
    <div className="flex justify-center items-center">
      {appState === "leaderboard" && <Leaderboard />}
      {appState === "calendar" && <div>Calendar</div>}
      {appState === "driver_standings" && <div>Driver Standings</div>}
    </div>
  );
};

export default AppContent;
