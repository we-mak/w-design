import styled from "styled-components";

export const Track = styled.div<any>`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 5px;
  height: 5px;
  background-color: ${props => props.theme.colors["B50"]};
`;
