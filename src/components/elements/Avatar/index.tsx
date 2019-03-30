import * as React from "react";
import { AvatarWrapper, AvatarImage } from "./Styled";
import { AvatarProps } from "./types";

const Avatar = ({ size, avatarUrl, dataInitial, alt, status, ...rest }: AvatarProps) => {
  return (
    <AvatarWrapper size={size} {...rest}>
      {dataInitial && <span>{dataInitial}</span>}
      <AvatarImage src={avatarUrl} alt={alt} />
      {status && <span />}
    </AvatarWrapper>
  );
};

export default Avatar;
