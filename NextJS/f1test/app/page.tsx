import Leaderboard from "./components/Leaderboard";
import Calendar from "./components/Calendar";
import TabsClient, { PageState } from "./components/TabsClient";
export const dynamic = "force-dynamic";

export default function Home() {
  const tabs: { key: PageState; label: string; content: React.ReactNode }[] = [
    { key: "leaderboard", label: "leaderboard", content: <Leaderboard /> },
    { key: "calendar", label: "calendar", content: <Calendar /> },
    {
      key: "driver_standings",
      label: "driver standings",
      content: <Leaderboard />,
    },
  ];

  return <TabsClient tabs={tabs} />;
}
