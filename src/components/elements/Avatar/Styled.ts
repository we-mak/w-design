import styled from "styled-components";
import { space } from "styled-system";
import { randomProperty } from "../../../common/helpers";
import { AvatarProps } from "./types";

const getSize = (props: AvatarProps) => {
  switch (props.size) {
    case "xs":
      return `
      height: 1.4rem;
      width: 1.4rem;
      `;
    case "sm":
      return `
      height: 2rem;
      width: 2rem;
      `;
    case "md":
      return `
      height: 2.8rem;
      width: 2.8rem;
      `;
    case "lg":
      return `
      height: 3.2rem;
      width: 3.2rem;
      `;
    case "xl":
      return `
      height: 4rem;
      width: 4rem;
      `;
    case "xxl":
      return `
      height: 6rem;
      width: 6rem;
      `;
  }
  return `
  height: 1.8rem;
  width: 1.8rem;
  `;
};

export const AvatarWrapper = styled.figure<AvatarProps>`
  background: ${props => randomProperty(props.theme.colors)};
  border-radius: 50%;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.85);
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;

  ${getSize};
  ${space};
`;

export const AvatarDataInit = styled.span`
  color: currentColor;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-transform: uppercase;
  font-weight: 500;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const PresenceMark = styled.img<AvatarProps>`
  border-radius: 50%;
`;
