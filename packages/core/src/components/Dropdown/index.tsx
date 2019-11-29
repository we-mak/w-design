import * as React from "react";
import { useClickOutside } from "@w-design/hooks";
import { Button } from "../..";
import { Arrow } from "./Arrow";
import { DropdownWrapper, DropdownPanel, Title } from "./Styled";
import { DropdownProps } from "./types";

const Dropdown = ({
  title,
  size = "md",
  iconAfter,
  content,
  position,
  ...rest
}: DropdownProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [panelstyle, setStyle] = React.useState({});

  const buttonRef = useClickOutside(() => setOpen(false));
  const panelRef: React.MutableRefObject<any> = React.useRef();

  const openDropdownPanel = () => {
    const buttonNode: HTMLElement = buttonRef!.current!;
    const panelNode: HTMLElement = panelRef!.current!;
    const btnDimension = buttonNode!.getBoundingClientRect();

    // Get Element positions
    const { height, width } = btnDimension;
    const panelWidth = panelNode.offsetWidth;

    // difine values
    let defaultMargin = 5; // Default Margin for Drop down panel
    let style;

    // Relation Position of panel and button
    const positions = {
      Xcenter: -(panelWidth / 2 - width / 2),
      Xright: -(panelWidth - width),
      // translate Y position
      Ybottom: height + defaultMargin
    };

    switch (position) {
      case "bottomCenter":
        style = {
          transform: `translate3d(${positions.Xcenter}px, ${positions.Ybottom}px, 0)`,
          top: 0
        };
        break;
      case "bottomRight":
        style = {
          transform: `translate3d(${positions.Xright}px, ${positions.Ybottom}px, 0)`,
          top: 0
        };
        break;
      case "topLeft":
        style = {
          transform: `translateY(${-(height + defaultMargin)}px)`,
          bottom: 0
        };
        break;
      case "topRight":
        style = {
          transform: `translate3d(${positions.Xright}px,${-(
            height + defaultMargin
          )}px, 0)`,
          bottom: 0
        };
        break;
      case "topCenter":
        style = {
          transform: `translate3d(${positions.Xcenter}px,${-(
            height + defaultMargin
          )}px,0)`,
          bottom: 0
        };
        break;
      default:
        style = {
          transform: `translateY(${height + defaultMargin}px)`,
          left: 0,
          top: 0
        };
    }

    setStyle(style);
    setOpen(!isOpen);
  };

  return (
    <DropdownWrapper>
      <Button
        buttonRef={buttonRef}
        ariaHaspopup={true}
        ariaExpanded={isOpen}
        size={size}
        iconAfter={iconAfter}
        onClick={openDropdownPanel}
        {...rest}
      >
        <Title>
          {title}
          {!iconAfter && <Arrow />}
        </Title>
      </Button>

      <DropdownPanel isOpen={isOpen} ref={panelRef} style={panelstyle}>
        {content}
      </DropdownPanel>
    </DropdownWrapper>
  );
};

export default Dropdown;
export { DropdownProps };
