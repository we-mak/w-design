import { GlobProps } from "@w-design/core";

export interface MasonryProps extends GlobProps {
  children: Array<any>;
  breakpoints: Array<number>;
  defaultCols?: number;
}
