import { GlobProps } from "../../typings";

export interface ProgressLoaderProps extends GlobProps, SizeProps {
  /* The completation in percent*/
  percent: number;
  /* Status of progress */
  status?: "progress" | "success" | "error";
  /** TODO: Type of progress */
  // appearance?: "line" | "circle";
  /* To show percent value of completation and icon */
  showInfo?: boolean;
  /* size of progress bar*/
  size?: "sm" | "md";
}
