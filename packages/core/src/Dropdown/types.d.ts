import { GlobProps, SizeProps } from "../../../types/typings";

export interface DropdownProps extends GlobProps, SizeProps {
  title?: string;
  iconAfter?: string;
  content?: React.ReactChild | React.ReactChild[];
  position?:
    | "bottomCenter"
    | "bottomRight"
    | "topLeft"
    | "topRight"
    | "topCenter";
}
