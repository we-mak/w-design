import { GlobProps } from "../../../typings";

export interface MasonryProps extends GlobProps {
  children: Array<any>;
  breakpoints: Array<number>;
  defaultCols?: number;
}
