import { SHOP_ROUTES } from "@/router/routes/shop";
import { Tab, TabList, TabPanelList, Tabs } from "@nhn-cloud/ncui";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

export const ShopLayout = () => {
  
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const TABS = useMemo(
    () => [
      { label: 'shotgun', path: SHOP_ROUTES.GUN },
      { label: 'revolver', path: SHOP_ROUTES.GUN }
    ],
    []
  )

  return (
    <Tabs selectedTabIndex={selectedTab}>
      <TabList type="box">
        {TABS.map((tab, idx) => (
          <Tab key={idx}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanelList>
        <Outlet />
      </TabPanelList>
    </Tabs>
  )
};