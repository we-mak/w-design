import { GlobProps } from "../../../typings";

export interface ProgressLoaderProps extends SizeProps {
  /* Status of progress */
  status?: "normal" | "success" | "error";
  /* The completation in percent*/
  percent?: number;
  /** Type of progress */
  appearance?: "line" | "circle";
  /* To show percent of completation*/
  showInfo?: boolean;
}
