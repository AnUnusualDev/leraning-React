import TabsClient, { PageState } from "../TabsClient";
import { DEFAULT_TAB, TABS } from "../tabsConfig";

const page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug as PageState;

  const validTabs = TABS.map((t) => t.key);
  const initialTab = validTabs.includes(slug) ? slug : DEFAULT_TAB;

  return <TabsClient tabs={TABS} initialTab={initialTab} />;
};

export default page;
