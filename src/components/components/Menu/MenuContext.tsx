import * as React from "react";
import { ContextProps } from "./types";

export const MenuContext = React.createContext<ContextProps | undefined>(undefined);

export const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a Menu as Menu Provider");
  }
  const { selectedKey, setSelectedKey } = context;

  const onSelectItem = (key: string) => {
    setSelectedKey(key);
  };

  return {
    selectedKey,
    onSelectItem
  };
};
