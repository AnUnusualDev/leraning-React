"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

export type PageState = "leaderboard" | "standings" | "calendar";

type Tab = { key: PageState; label: string; content: React.ReactNode };

const TabsClient = ({
  tabs,
  initialTab,
}: {
  tabs: readonly Tab[];
  initialTab: PageState;
}) => {
  const router = useRouter();
  const params = useParams<{ slug?: string }>();
  const [isPending, startTransition] = useTransition();

  const slugFromUrl = params?.slug as PageState | undefined;
  const urlTab: PageState =
    slugFromUrl && tabs.some((t) => t.key === slugFromUrl)
      ? slugFromUrl
      : initialTab;

  const [pendingTab, setPendingTab] = useState<PageState | null>(null);

  // When URL is correct: Delete pendingTab
  useEffect(() => {
    if (pendingTab && pendingTab === urlTab) setPendingTab(null);
  }, [pendingTab, urlTab]);

  const activeTab = pendingTab ?? urlTab;

  const goTo = (key: PageState) => {
    setPendingTab(key);

    startTransition(() => {
      router.push(key === initialTab ? "/dashboard" : `/dashboard/${key}`);
    });
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
                ${activeTab === t.key ? " border-racing-red text-victory-white" : ""}
            `}
            aria-selected={activeTab === t.key}
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
            style={{ display: activeTab === t.key ? "flex" : "none" }}
          >
            {t.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabsClient;

/**
 * Bugfixing the "flickering"
 * Why do we use `pendingTab` here?
 *
 * In the Next.js App Router, `router.push()` triggers an async route transition.
 * During this transition, `useParams()` can temporarily return an unstable value
 * (e.g. `undefined` or the previous slug) while the new route tree is loading.
 *
 * Our UI logic falls back to the default tab when no valid slug is present.
 * This caused a brief flicker where the default tab was rendered for a few
 * milliseconds before the new slug became available.
 *
 * To avoid this, we use an "optimistic UI" approach:
 * - When a tab is clicked, we immediately set `pendingTab` to the target tab.
 * - While navigation is in progress, the UI prefers `pendingTab` over the URL state.
 * - Once the URL slug matches `pendingTab`, we clear it and let the URL
 *   become the single source of truth again.
 *
 * This keeps the tab UI stable during route transitions and prevents flickering.
 */
