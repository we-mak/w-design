import styled from "styled-components";
import { DrawerProps } from "./types";

export const DrawerContainer = styled.div`
  position: fixed;
  padding: ${props => `${props.theme.space[0]}px`};
  width: 0;
  top: 0;
  z-index: 1000;
`;
DrawerContainer.displayName = "DrawerContainer";

export const DrawerPanel = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  max-width: 280px;
  background-color: #fff;
  transform: ${props => !props.isOpen && `translateX(-280px)`};
  transition: transform 0.3s ease;
  will-change: transform;
  z-index: 1;
`;
DrawerPanel.displayName = "DrawerPanel";

export const Overlay = styled.div<DrawerProps>`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.1s ease;
  background: rgba(0, 18, 35, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
`;
Overlay.displayName = "DrawerOverlay";
