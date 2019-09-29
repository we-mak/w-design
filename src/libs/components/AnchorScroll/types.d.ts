import { ReactChild, ReactChildren } from "react";
import { GlobProps } from "../../types";

export interface ScrollLinkProps extends GlobProps {
  duration: number; //scroll duration time, default by 200
  easing: Function; // easing function
  destination: string | number; // id or position of target
  children: ReactChild | ReactChildren;
  margin?: number; // addition or subtraction scroll target point
  top?: number; // addition height based on fixed menu height
  callback?: Function; //callback function after scrolled
}
