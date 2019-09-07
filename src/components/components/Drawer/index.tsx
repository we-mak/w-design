import React from "react";
import { disableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from "body-scroll-lock";
import { DrawerContainer, Overlay, DrawerPanel } from "./Styled";
import { DrawerProps } from "./types";

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
};

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  const documentBody: Element = document.body;

  if (isOpen) {
    disableBodyScroll(documentBody, options);
  } else {
    clearAllBodyScrollLocks();
  }

  return (
    <DrawerContainer>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <DrawerPanel isOpen={isOpen}>{children}</DrawerPanel>
    </DrawerContainer>
  );
};

export default Drawer;
