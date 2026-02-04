import TabsClient from "./TabsClient";
import { TABS, DEFAULT_TAB } from "./tabsConfig";

const page = () => {
  return <TabsClient tabs={TABS} initialTab={DEFAULT_TAB} />;
};

export default page;
