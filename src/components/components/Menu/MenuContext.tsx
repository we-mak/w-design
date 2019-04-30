import * as React from "react";
import { ContextProps } from "./types";

export const MenuContext = React.createContext<ContextProps>({
  defaultSelectedKey: "",
  selectedKey: "",
  onSelectItem: (key?: any) => {
    //console.log(key);
    return key;
  }
});
