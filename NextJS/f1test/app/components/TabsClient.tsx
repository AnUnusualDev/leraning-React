"use client";
import React, { useState } from "react";

export type PageState = "leaderboard" | "driver_standings" | "calendar";

type Tab = { key: PageState; label: string; content: React.ReactNode };

const TabsClient = ({ tabs }: { tabs: Tab[] }) => {
  const [pageState, setPageState] = useState<PageState>("leaderboard");
  return (
    <>
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
      <div>
        {tabs.map((t) => (
          <div
            key={t.key}
            style={{ display: pageState === t.key ? "flex" : "none" }}
          >
            {t.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabsClient;
