import styled from "styled-components";

export const RequiredMark = styled.sup`
  color: ${props => props.theme.colors["R30"]};
  font-size: ${props => props.theme.fontSizes[0]};
  top: -0.2rem;
`;
