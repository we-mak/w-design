import * as React from "react";
import styled from "styled-components";
import { useClickOutside } from "@w-design/hooks";
import Button, { ButtonProps } from "../Button";
import { Arrow } from "./Arrow";
import { DropdownPanel } from "./DropdownPanel";
import { GlobProps, SizeProps } from "../common/props";

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
`;

const Title = styled.span`
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  line-height: 1.2;
`;

export interface DropdownProps extends GlobProps, SizeProps, ButtonProps {
  title?: string;
  content?: React.ReactNode | React.ReactNode[];
  position?: "bottomCenter" | "bottomRight" | "topLeft" | "topRight" | "topCenter";
}

const Dropdown = ({ title, size = "md", iconAfter, content, position, ...rest }: DropdownProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [panelstyle, setStyle] = React.useState({});

  const buttonRef: React.MutableRefObject<any> = React.useRef();
  const panelRef = useClickOutside(e => {
    if (!buttonRef!.current!.contains(e.target)) {
      setOpen(false);
    }
  });

  function openDropdownPanel() {
    const buttonNode: HTMLElement = buttonRef!.current!;
    const panelNode: HTMLElement = panelRef!.current!;
    const btnDimension = buttonNode!.getBoundingClientRect();

    // Get Element positions
    const { height, width } = btnDimension;
    const panelWidth = panelNode.offsetWidth;

    // difine values
    let defaultMargin = 5; // Default Margin for Dropdown panel
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
          transform: `translate3d(${positions.Xright}px,${-(height + defaultMargin)}px, 0)`,
          bottom: 0
        };
        break;
      case "topCenter":
        style = {
          transform: `translate3d(${positions.Xcenter}px,${-(height + defaultMargin)}px,0)`,
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
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Dropdown;
