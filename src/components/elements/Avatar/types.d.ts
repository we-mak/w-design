import { GlobProps, SizeProps } from "../../../typings";

export interface AvatarProps extends SizeProps, GlobProps {
  // User online status
  status?: "online" | "offline" | "busy";
  avatarUrl?: string;
  // Initial content of avatar if without image
  dataInitial?: string;
  alt?: string;
}
