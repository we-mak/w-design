import styled from "styled-components";
import { slideDown } from "@w-design/helpers";
import { ModalContainerStyleProps } from "./";

export const ModalContainer = styled.div<ModalContainerStyleProps>`
  background: #fff;
  border-radius: ${props => props.theme.radii[2]};
  box-shadow: ${props => props.theme.shadows[4]};
  display: flex;
  flex-direction: column;
  padding: 0 ${props => `${props.theme.space[2]}px`};
  position: absolute;
  top: 0;
  margin: 1rem auto;
  max-width: ${props => {
    if (props.size === "large") {
      return `960px;`;
    } else if (props.size === "small") {
      return `320px`;
    }
    return `680px`;
  }};
  font-family: ${props => `${props.theme.fonts["normal"]}px`};
  width: 100%;
  z-index: 1;
  animation: ${slideDown} 0.3s ease 1;
  will-change: transform;
`;
