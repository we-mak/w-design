import styled from "styled-components";

type DropdownPanelProps = {
  isOpen: boolean;
};

export const DropdownPanel = styled.div<DropdownPanelProps>`
  background: #fff;
  border-radius: ${props => props.theme.radii[2]};
  box-shadow: ${props => props.theme.shadows[4]};
  position: absolute;
  min-width: 80px;
  z-index: 300;
  overflow-y: auto;
  padding: 0.2rem;
  max-height: 50vh;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
`;
