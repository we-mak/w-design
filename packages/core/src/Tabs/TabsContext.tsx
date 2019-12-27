import * as React from "react";

export interface TabsContextProps {
  defaultSelectedIndex?: number;
  selectedIndex?: number;
  setSelectedIndex: (index: number) => void;
}

export const TabsContext = React.createContext<TabsContextProps | undefined>(undefined);

export const useTab = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTab must be used within a Tabs as Tabs Provider");
  }

  const { selectedIndex, setSelectedIndex } = context;
  const onSelectTab = (index: number) => setSelectedIndex(index);

  return {
    selectedIndex,
    onSelectTab
  };
};
