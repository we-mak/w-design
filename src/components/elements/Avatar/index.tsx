import * as React from "react";
import { AvatarWrapper, AvatarDataInit, AvatarImage, PresenceMark } from "./Styled";
import { firstLetter } from "../../../common/helpers";
import { AvatarProps } from "./types";

const Avatar = ({
  size = "md",
  avatarUrl,
  dataInitial = "We mak",
  alt,
  presence,
  ...rest
}: AvatarProps) => {
  return (
    <AvatarWrapper size={size} {...rest}>
      {dataInitial && <AvatarDataInit size={size}>{firstLetter(dataInitial)}</AvatarDataInit>}
      {avatarUrl && <AvatarImage src={avatarUrl} alt={alt} />}
      {presence && <PresenceMark presence={presence} size={size} />}
    </AvatarWrapper>
  );
};

export default Avatar;
