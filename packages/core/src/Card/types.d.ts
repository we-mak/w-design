import { PictureProps } from "../Picture";
import { GlobProps } from "../../../types/typings";

export interface CardProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  raised?: boolean;
  isLoading?: boolean;
}

export interface CardMediaProps extends GlobProps, PictureProps {
  // image cover url
  imageUrl?: string;
  children?: React.ReactChild;
  alt?: string;
}

export interface CardHeaderProps extends GlobProps {
  title?: string;
  description?: string | React.ReactChild;
  children?: React.ReactChild;
}
