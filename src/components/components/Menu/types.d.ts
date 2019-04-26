import { GlobProps } from "../../../typings";

export interface MenuProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  fullWidth?: boolean;
  width: string | number;
}
export interface MenuItemProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  after?: React.ReactChild | React.ReactChild[];
  iconBefore?: React.ReactChild;
  isSelected?: boolean;
}

export interface SubMenuProps extends GlobProps {
  title?: string;
  isOpen?: boolean;
  icon?: React.ReactChild;
  children?: React.ReactChild | React.ReactChild[];
}
