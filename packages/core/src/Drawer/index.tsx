import React, { useEffect, memo, useState } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from "body-scroll-lock";
// import Portal from "../../elements/Portal";
import { DrawerContainer, Overlay, DrawerPanel } from "./Styled";
import { GlobProps } from "../common/props";

export interface DrawerProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
  onClose?: (e: React.SyntheticEvent<HTMLElement>) => void;
  isOpen: boolean;
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
};

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  let documentBody: Element;
  if (typeof document !== "undefined") {
    documentBody = document.body;
  }

  const [panelStyle, setPanelStyle] = useState({});

  let animation: number | null = null;
  useEffect(() => {
    if (isOpen) {
      animation = requestAnimationFrame(() =>
        setPanelStyle({
          transform: "translateX(0px)"
        })
      );

      disableBodyScroll(documentBody, options);
    } else {
      setPanelStyle({});
      clearAllBodyScrollLocks();
    }

    return () => {
      cancelAnimationFrame(animation!);
      setPanelStyle({});
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <DrawerContainer>
      <DrawerPanel style={panelStyle}>{children}</DrawerPanel>
      <Overlay isOpen={isOpen} onClick={onClose} />
    </DrawerContainer>
  );
};

export default memo(Drawer);
