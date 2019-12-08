import { GlobProps, SizeProps } from "../../../types/typings";

export interface AvatarProps extends SizeProps, GlobProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  // User online status
  presence?: "online" | "offline" | "busy";
  avatarUrl?: string;
  // Initial content of avatar if without image
  dataInitial?: string;
  alt?: string;
}
