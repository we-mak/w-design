import * as React from "react";
import styled, { css } from "styled-components";
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
`;
DropdownWrapper.displayName = "DropdownWrapper";

const getDropdownPanelStyle = (props: DropdownProps) => {
  return css`
    background: #fff;
    border-radius: ${props.theme.radii[2]};
    box-shadow: ${props.theme.shadows[4]};
    position: absolute;
    display: block;
    min-width: 180px;
    transform: translateY(0.2rem);
    z-index: 300;
    overflow-y: auto;
    padding: 0.2rem;
  `;
};

const DropdownPanel = styled.div`
  ${getDropdownPanelStyle}
`;
DropdownPanel.displayName = "DropdownPanel";

const Dropdown = ({ title, size = "md", iconAfter, content }: DropdownProps) => {
  return (
    <DropdownWrapper>
      <Button aria-haspopup="true" size={size} iconAfter={iconAfter}>
        <Title>
          {title}
          {!iconAfter && <Arrow />}
        </Title>
      </Button>
      <DropdownPanel>{content}</DropdownPanel>
    </DropdownWrapper>
  );
};

export default Dropdown;
