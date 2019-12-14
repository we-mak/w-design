import styled, { css } from "styled-components";
import { GlobProps } from "../common/props";

export interface ColapsiblePanelProps extends GlobProps {
  isOpen: boolean;
}

export const ColapsiblePanel = styled.div((props: ColapsiblePanelProps) => {
  return css`
    background: #fff;
    border-radius: ${props.theme.radii[2]};
    box-shadow: ${props.theme.shadows[4]};
    position: absolute;
    min-width: 80px;
    z-index: 300;
    overflow-y: auto;
    padding: 0.2rem;
    max-height: 50vh;
    opacity: ${props.isOpen ? 1 : 0};
    visibility: ${props.isOpen ? "visible" : "hidden"};
  `;
});
ColapsiblePanel.displayName = "ColapsiblePanel";
