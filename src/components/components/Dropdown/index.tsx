import * as React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import { Arrow } from "./Arrow";
import { DropdownProps } from "./types";

const Title = styled.span`
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  line-height: 1.2;
`;
Title.displayName = "Title";

const DropdownWrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
`;
DropdownWrapper.displayName = "DropdownWrapper";

const DropdownPanel = styled.div`
  background: #fff;
  border-radius: ${props => props.theme.radii[2]};
  box-shadow: ${props => props.theme.shadows[4]};
  position: absolute;
  display: block;
  min-width: 80px;
  z-index: 300;
  overflow-y: auto;
  padding: 0.2rem;
  max-height: 50vh;
`;
DropdownPanel.displayName = "DropdownPanel";

const Dropdown = ({ title, size = "md", iconAfter, content, position, ...rest }: DropdownProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [panelstyle, setStyle] = React.useState({});

  document.addEventListener("click", (e: any) => {
    if (!e.target.closest(".dropdown") && isOpen) {
      setOpen(false);
    }
  });

  const buttonRef = React.useRef() as React.MutableRefObject<any>;

  const openDropdownPanel = () => {
    const buttonNode: HTMLElement = buttonRef!.current!;
    const dimension = buttonNode!.getBoundingClientRect();

    console.log(dimension);

    switch (position) {
      case "bottomCenter":
        setStyle({
          transform: `translate3d(${-(dimension.right - dimension.left) / 2}px,0.2rem,0)`
        });
        break;
      case "topLeft":
        setStyle({
          transform: `translateY(${-dimension.height - 0.2 * 16}px)`,
          bottom: 0
        });
        break;
      case "topCenter":
        setStyle({
          transform: `translate3d(${-(dimension.right - dimension.left) / 2}px,${-dimension.height -
            0.2 * 16}px,0)`,
          bottom: 0
        });
        break;
      case "topRight":
        setStyle({
          transform: `translate3d(${-(dimension.right - dimension.left)}px,${-dimension.height -
            0.2 * 16}px,0)`,
          bottom: 0
        });
        break;
      default:
        setStyle({
          transform: "translateY(0.2rem)"
        });
    }

    setOpen(!isOpen);
  };

  return (
    <DropdownWrapper className="dropdown" {...rest}>
      <Button
        buttonRef={buttonRef}
        ariaHaspopup={true}
        ariaExpanded={isOpen}
        size={size}
        iconAfter={iconAfter}
        onClick={openDropdownPanel}
      >
        <Title>
          {title}
          {!iconAfter && <Arrow />}
        </Title>
      </Button>
      {isOpen && <DropdownPanel style={panelstyle}>{content}</DropdownPanel>}
    </DropdownWrapper>
  );
};

export default Dropdown;
