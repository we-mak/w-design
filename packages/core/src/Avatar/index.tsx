import * as React from "react";
import {
  AvatarWrapper,
  AvatarDataInit,
  AvatarImage,
  PresenceMark
} from "./Styled";
import { firstLetter, randomProperty, filterObject } from "@w-design/helpers";
import { colors } from "../common/colors";
import { GlobProps } from "../../../types/typings";

export interface AvatarProps extends GlobProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  // User online status
  presence?: "online" | "offline" | "busy";
  avatarUrl?: string;
  // Initial content of avatar if without image
  dataInitial?: string;
  alt?: string;
}

const Avatar = ({
  size = "md",
  avatarUrl,
  dataInitial = "We mak",
  alt,
  presence,
  ...rest
}: AvatarProps) => {
  const [backgroundColor, setBackgroundColor] = React.useState("");

  React.useEffect(() => {
    if (!avatarUrl) {
      setBackgroundColor(
        randomProperty(filterObject(colors, ["WHITE", "BLACK", "N1"]))
      );
    }
  }, []);

  return (
    <AvatarWrapper style={{ backgroundColor }} size={size} {...rest}>
      {dataInitial && (
        <AvatarDataInit size={size}>{firstLetter(dataInitial)}</AvatarDataInit>
      )}
      {avatarUrl && <AvatarImage data-src={avatarUrl} alt={alt} />}
      {presence && <PresenceMark presence={presence} size={size} />}
    </AvatarWrapper>
  );
};

export default React.memo(Avatar);
