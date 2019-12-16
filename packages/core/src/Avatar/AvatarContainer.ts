import styled from "styled-components";
import { space } from "styled-system";
import { AvatarProps } from "./index";

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

export const AvatarContainer = styled.figure<AvatarProps>`
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
