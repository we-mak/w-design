import { GlobProps, SizeProps } from "../../../typings";

export interface DropdownProps extends GlobProps, SizeProps {
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
  iconAfter?: string;
  content?: React.ReactChild | React.ReactChild[];
}
