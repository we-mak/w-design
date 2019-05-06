import { GlobProps } from "../../../typings";

export interface MenuProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  fullWidth?: boolean;
  width: string | number;
  // set default selected key
  defaultSelectedKey?: string;
  // get key is selecting
  selectedKey?: string;
}
export interface MenuItemProps extends GlobProps {
  eventKey?: string;
  children?: any;
  after?: React.ReactChild | React.ReactChild[];
  iconBefore?: React.ReactChild;
  isSelected?: boolean;
  tabIndex?: number;
  isDisabled?: boolean;
}

export interface SubMenuProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
  isOpen?: boolean;
  icon?: React.ReactChild;
  disabled?: boolean;
  isLoading?: boolean;
  onLoadingList?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

export interface ContextProps {
  defaultSelectedKey?: string;
  defaultOpenSubMenuKeys?: string[];
  selectedKey?: string;
  setSelectedKey: (key: string) => void;
  // openSubMenuKeys?: string[];
  // onSelectItem: (key: any) => void;
  // onOpenSubMenuChange
}
