import { GlobProps } from "../../../typings";

export interface CardProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  raised?: boolean;
  isLoading?: boolean;
}

export interface CardMediaProps extends GlobProps {
  // image cover url
  imageUrl?: string;
  children?: React.ReactChild;
}

export interface CardHeaderProps extends GlobProps {
  title?: string;
  description?: string | React.ReactChild;
  children?: React.ReactChild;
}
