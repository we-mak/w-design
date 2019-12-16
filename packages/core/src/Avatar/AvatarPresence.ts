import styled from "styled-components";
import { AvatarProps } from "./index";

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

export const AvatarPresence = styled.span<AvatarProps>`
  border-radius: 50%;
  bottom: 0.1rem;
  pointer-events: none;
  position: absolute;
  z-index: 30;
  background-color: ${setPresenceColor};
  ${getPresenceStyle};
`;
