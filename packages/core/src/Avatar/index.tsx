import * as React from "react";
import { firstLetter, randomProperty, filterObject } from "@w-design/helpers";
import { colors } from "../common/colors";
import { GlobProps } from "../common/props";
import { AvatarContainer, getSize } from "./AvatarContainer";
import { AvatarPresence } from "./AvatarPresence";
import { AvatarInitData } from "./AvatarInitData";
import { AvatarImage } from "./AvatarImage";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;

export interface AvatarProps extends GlobProps {
  size?: AvatarSize;
  // User online status
  presence?: "online" | "offline" | "busy";
  avatarUrl?: string;
  // Initial content of avatar if without image
  dataInitial?: string;
  alt?: string;
  crossOrigin?: React.ImgHTMLAttributes<any>["crossOrigin"];
}

const Avatar = ({
  size = "md",
  avatarUrl,
  dataInitial = "We mak",
  alt,
  crossOrigin,
  presence,
}: AvatarProps) => {
  const [backgroundColor, setBackgroundColor] = React.useState("white");

  React.useEffect(() => {
    if (!avatarUrl) {
      setBackgroundColor(
        randomProperty(filterObject(colors, ["WHITE", "BLACK", "N1"]))
      );
    }
  }, []);

  return (
    <AvatarContainer style={{ backgroundColor }} size={size}>
      {dataInitial && (
        <AvatarInitData size={size}>{firstLetter(dataInitial)}</AvatarInitData>
      )}
      {avatarUrl && (
        <AvatarImage
          width={getSize(size) * 16}
          height={getSize(size) * 16}
          data-src={avatarUrl}
          alt={alt}
          crossOrigin={crossOrigin}
        />
      )}
      {presence && <AvatarPresence presence={presence} size={size} />}
    </AvatarContainer>
  );
};

export default React.memo(Avatar);
