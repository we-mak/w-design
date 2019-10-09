import { ReactChild, ReactChildren } from "react";
import { GlobProps } from "../../../typings";

export interface ScrollLinkProps extends GlobProps {
  destination: string | number; // id or position of target
  children: ReactChild | ReactChildren;
  duration?: number; //scroll duration time, default by 200
  easing?: Function; // easing function
  margin?: number; // addition or subtraction scroll target point
  top?: number; // addition height based on fixed menu height
  callback?: Function; //callback function after scrolled
}