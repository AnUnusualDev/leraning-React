import Calendar from "../components/Calendar";
import Leaderboard from "../components/Leaderboard";
import { PageState } from "./TabsClient";

export const TABS = [
  { key: "leaderboard", label: "leaderboard", content: <Leaderboard /> },
  { key: "calendar", label: "calendar", content: <Calendar /> },
  {
    key: "standings",
    label: "standings",
    content: <Leaderboard />,
  },
] as const;

export const DEFAULT_TAB: PageState = "leaderboard";
