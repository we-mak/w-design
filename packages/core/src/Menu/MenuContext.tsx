import * as React from "react";
import { MenuContextProps } from "./types";

export const MenuContext = React.createContext<MenuContextProps | undefined>(
  undefined
);

export const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a Menu as Menu Provider");
  }
  const {
    selectedKey,
    setSelectedKey,
    openKeys,
    setOpenKeys,
    defaultOpenKeys
  } = context;

  const onSelectItem = (key: string) => setSelectedKey(key);
  const onSelectKeys = (key: string) => setOpenKeys(openKeys!.push(key));

  const setDefaultOpenKey = (key?: string) => {
    for (let i in defaultOpenKeys) {
      if (key && defaultOpenKeys[i] === key) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  return {
    selectedKey,
    onSelectItem,
    setDefaultOpenKey,
    openKeys,
    onSelectKeys
  };
};
