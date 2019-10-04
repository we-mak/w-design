import styled from "styled-components";
import { DrawerProps } from "./types";

export const DrawerContainer = styled.div`
  position: fixed;
  padding: ${props => `${props.theme.space[0]}px`};
  width: auto;
  height: auto;
  top: 0;
  z-index: 1000;
`;
DrawerContainer.displayName = "DrawerContainer";

export const DrawerPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  max-width: 280px;
  background-color: #fff;
  z-index: 1;
  transform: translateX(-280px);
  transition: transform 0.3s ease;
  will-change: transform;
`;

DrawerPanel.displayName = "DrawerPanel";

export const Overlay = styled.div<DrawerProps>`
  background: rgba(0, 18, 35, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s ease;
`;
Overlay.displayName = "DrawerOverlay";
