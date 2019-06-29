import { GlobProps } from "../../../typings";

export interface AvatarProps extends GlobProps {
  name?: string;
  description?: React.ReactChild | string;
  actions?: React.ReactChild | React.ReactChild[];
}
