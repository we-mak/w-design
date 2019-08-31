import styled from "styled-components";
import { DrawerProps } from "./types";

export const DrawerPanel = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: auto;
  max-width: 280px;
  background-color: #fff;
  transform: ${props => (props.isOpen ? `translateX(0)` : `translateX(-280px)`)};
  transition: 0.3s ease;
  will-change: transform;
  z-index: 1000;
`;
DrawerPanel.displayName = "DrawerPanel";

export const Overlay = styled.div`
  background: rgba(0, 18, 35, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;
Overlay.displayName = "DrawerOverlay";
