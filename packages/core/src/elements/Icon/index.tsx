/**
 * Component build on top of Fontawesome
 */
import * as React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  &.info {
    color: ${props => props.theme.colors["B50"]};
  }
  &.warn {
    color: ${props => props.theme.colors["O30"]};
  }
  &.success {
    color: ${props => props.theme.colors["G30"]};
  }
  &.error {
    color: ${props => props.theme.colors["R30"]};
  }
`;

const Icon = ({ className, ...rest }: any) => (
  <StyledIcon className={className} aria-hidden="true" {...rest} />
);

export default Icon;
