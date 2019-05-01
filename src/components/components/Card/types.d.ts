import { GlobProps } from "../../../typings";

export interface CardProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  raised?: boolean;
}

export interface CardMediaProps extends GlobProps {
  // image cover url
  imageUrl?: string;
}
export interface CardHeaderProps extends GlobProps {
  title?: string;
}
