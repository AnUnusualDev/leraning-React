"use client";
import { useState } from "react";

type PageState = "leaderboard" | "driver_standings" | "calendar";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("leaderboard");

  const tabs: { key: PageState; label: string }[] = [
    { key: "leaderboard", label: "leaderboard" },
    { key: "calendar", label: "calendar" },
    { key: "driver_standings", label: "driver standings" },
  ];

  return (
    <div
      role="tablist"
      className="flex w-screen items-bottom justify-between bg-carbon-fiber h-[50px]"
    >
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          role="tab"
          className={`
    tab w-[30vw] p-0 text-asphalt-gray text-m font-bold border-b-[3px] border-carbon-fiber
    ${pageState === t.key ? " border-racing-red text-victory-white" : ""}
  `}
          aria-selected={pageState === t.key}
          onClick={() => setPageState(t.key)}
        >
          {t.label.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
