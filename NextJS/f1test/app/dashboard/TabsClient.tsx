"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type PageState = "leaderboard" | "driver_standings" | "calendar";

type Tab = { key: PageState; label: string; content: React.ReactNode };

const TabsClient = ({
  tabs,
  initialTab,
}: {
  tabs: readonly Tab[];
  initialTab: PageState;
}) => {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const [pageState, setPageState] = useState<PageState>(initialTab);

  useEffect(() => {
    const slug = params?.slug as PageState | undefined;
    if (slug && tabs.some((t) => t.key === slug)) {
      setPageState(slug);
    }
  }, [params?.slug, tabs]);

  const goTo = (key: PageState) => {
    setPageState(key);
    router.push(`/dashboard/${key}`);
  };

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
                tab w-[30vw] h-[50px] p-0 text-asphalt-gray text-m font-bold border-b-[3px] border-carbon-fiber
                ${pageState === t.key ? " border-racing-red text-victory-white" : ""}
            `}
            aria-selected={pageState === t.key}
            onClick={() => goTo(t.key)}
          >
            {t.label.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="flex flex-col h-full min-h-0 overflow-hidden items-center">
        {tabs.map((t) => (
          <div
            className="min-h-0 w-full"
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
