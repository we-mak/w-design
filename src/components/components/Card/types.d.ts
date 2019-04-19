import { GlobProps } from "../../../typings";

export interface CardProps extends GlobProps {
  cover?: string;
  header?: React.ReactChild;
  body?: React.ReactChild;
  footer?: React.ReactChild;
}
