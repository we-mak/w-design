import styled from "styled-components";
import { slideDown } from "@w-design/helpers";
import { ModalContainerStyleProps } from "./types";

export const WModal = styled.div`
  position: fixed;
  display: flex;
  padding: ${props => `${props.theme.space[0]}px`};
  overflow-y: scroll;
  padding-right: 0 !important;
  width: 100% !important;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  z-index: 1000;
  .close-btn {
    float: right;
  }
`;

WModal.displayName = "WModal";

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
ModalContainer.displayName = "ModalContainer";

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: ${props => `${props.theme.space[3]}px`};
  position: relative;
  margin-bottom: 1rem;
  max-width: 960px;
`;
ModalBody.displayName = "ModalBody";

export const ModalOverlay = styled.div`
  background: rgba(248, 249, 250, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;
ModalOverlay.displayName = "ModalOverlay";

export const ModalHeader = styled.div`
  padding: ${props => `${props.theme.space[3]}px`};
  margin-top: ${props => `${props.theme.space[2]}px`};
`;
ModalHeader.displayName = "ModalHeader";

export const ModalFooter = styled.div`
  padding: ${props => `${props.theme.space[3]}px`};
  text-align: right;
`;
ModalFooter.displayName = "ModalFooter";
