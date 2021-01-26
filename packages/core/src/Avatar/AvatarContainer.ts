import styled from "styled-components";
import { space } from "styled-system";
import { AvatarProps, AvatarSize } from "./index";

export const getSize = (size: AvatarSize): number => {
  switch (size) {
    case "xs":
      return 1.4;
    case "sm":
      return 2;
    case "md":
      return 2.8;
    case "lg":
      return 3.2;
    case "xl":
      return 4;
    case "xxl":
      return 6;
    default:
      return 1.8;
  }
};

export const setAvatarSize = ({ size }: AvatarProps) => {
  const sizeFromProps = getSize(size);
  return `height: ${sizeFromProps}rem;width: ${sizeFromProps}rem`;
};

export const AvatarContainer = styled.figure<AvatarProps>`
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.85);
  display: inline-block;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;
  ${setAvatarSize};
  ${space};
`;
