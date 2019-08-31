import React, { useEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from "body-scroll-lock";
import Portal from "../../elements/Portal";
import { Overlay, DrawerPanel } from "./Styled";
import { DrawerProps } from "./types";

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
};
// Main root layout selecting
const documentBody: any = document.body;

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(documentBody, options);
    }
    return () => clearAllBodyScrollLocks();
  }, []);

  return (
    <Portal>
      <DrawerPanel isOpen={isOpen}>{children}</DrawerPanel>
      {isOpen && <Overlay onClick={onClose} />}
    </Portal>
  );
};

export default Drawer;
