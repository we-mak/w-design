import { GlobProps } from "../../../typings";

export interface AvatarGroupProps extends GlobProps {
  name?: string | React.ReactChild;
  description?: React.ReactChild | string;
  actions?: React.ReactChild | React.ReactChild[];
  avatar: React.ReactChild;
}
