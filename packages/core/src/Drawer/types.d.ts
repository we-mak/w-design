import { GlobProps } from "../../../types/typings";

export interface DrawerProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  onClose?: (e: React.SyntheticEvent<HTMLElement>) => void;
  isOpen: boolean;
}
