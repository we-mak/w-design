import styled from "styled-components";
import { AvatarProps } from "./index";

const getTextSize = (props: AvatarProps) => {
  switch (props.size) {
    case "xs":
      return `font-size: .6rem;`;
    case "sm":
      return `font-size: .9rem;`;
    case "md":
      return `font-size: 1rem;`;
    case "lg":
      return `font-size: 1.8rem;`;
    case "xl":
      return `font-size: 2rem;`;
    case "xxl":
      return `font-size: 2.8rem;`;
    default:
      return `font-size: 1.4rem;`;
  }
};

export const AvatarInitData = styled.span<AvatarProps>`
  color: currentColor;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-transform: uppercase;
  font-weight: 500;
  ${getTextSize};
`;
