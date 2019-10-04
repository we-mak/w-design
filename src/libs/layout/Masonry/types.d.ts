import { GlobProps } from "../../../typings";

export interface MasonryProps extends GlobProps {
  children: any[];
  breakpoints: number[];
  defaultCols?: number;
}
