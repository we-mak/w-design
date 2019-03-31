import styled from "styled-components";
import { space } from "styled-system";
import { randomProperty, filterObject } from "../../../common/helpers";
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

const setBackground = (props: AvatarProps) => {
  const {
    theme: { colors }
  } = props;

  return randomProperty(filterObject(colors, ["WHITE", "BLACK", "N1"]));
};

export const AvatarWrapper = styled.figure<AvatarProps>`
  background: ${setBackground};
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

export const AvatarImage = styled.img<AvatarProps>`
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
    height: .6rem;
    width: .6rem;
    bottom: 0;
    `;
    case "sm":
      return `
    height: .6rem;
    width: .6rem;
    bottom: 0;
    `;
    case "md":
      return `
    height: .7rem;
    width: .7rem;
    bottom: 0;
    `;
    case "lg":
      return `
    height: .7rem;
    width: .7rem;
    bottom: 0;
    `;

    case "xl":
      return `
    height: .8rem;
    width: .8rem;
    bottom: 0;
    `;
    case "xxl":
      return `
    height: .9rem;
    width: .9rem;
    bottom: 0;
    `;
    default:
      return `
    height: .7rem;
    width: .7rem;
    bottom: 0;
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
  right: 0;
  pointer-events: none;
  position: absolute;
  z-index: 30;
  background-color: ${setPresenceColor};
  ${getPresenceStyle};
`;
