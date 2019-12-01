import styled from "styled-components";
import { space } from "styled-system";
import { AvatarProps } from "./types";
import Image from "../Image";

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
    default:
      return `
    height: 1.8rem;
    width: 1.8rem;
    `;
  }
};

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

export const AvatarWrapper = styled.figure<AvatarProps>`
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.85);
  display: inline-block;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;
  ${getSize};
  ${space};
`;

export const AvatarDataInit = styled.span<AvatarProps>`
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

export const AvatarImage = styled(Image)<AvatarProps>`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const getPresenceStyle = (props: AvatarProps) => {
  switch (props.size) {
    case "xs":
      return `
    height: .4rem;
    width: .4rem;
    right: 0;
    border: 0.075rem solid #fff;
    `;
    case "sm":
      return `
    height: .5rem;
    width: .5rem;
    right: 0;
    border: 0.075rem solid #fff;
    `;
    case "md":
      return `
    height: .7rem;
    width: .7rem;
    right: 0;
    border: 0.075rem solid #fff;
    `;
    case "lg":
      return `
    height: .7rem;
    width: .7rem;
    right: .1rem;
    border: 0.075rem solid #fff;
    `;

    case "xl":
      return `
    height: .8rem;
    width: .8rem;
    right: .3rem;
    border: 0.1rem solid #fff;
    `;
    case "xxl":
      return `
    height: .9rem;
    width: .9rem;
    right: .9rem;
    border: 0.1rem solid #fff;
    `;
    default:
      return `
    height: .7rem;
    width: .7rem;
    right: .7rem;
    border: 0.1rem solid #fff;
  `;
  }
};

const setPresenceColor = (props: AvatarProps) => {
  const {
    presence,
    theme: { colors }
  } = props;

  if (presence === "online") return colors["G30"];
  if (presence === "offline") return colors["N20"];
  if (presence === "busy") return colors["R30"];

  return colors["G30"];
};

export const PresenceMark = styled.span<AvatarProps>`
  border-radius: 50%;
  bottom: 0.1rem;
  pointer-events: none;
  position: absolute;
  z-index: 30;
  background-color: ${setPresenceColor};
  ${getPresenceStyle};
`;
