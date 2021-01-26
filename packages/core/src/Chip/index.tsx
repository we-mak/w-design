import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors["N1"]};
  border-radius: 4rem;
  display: inline-flex;
  font-size: 90%;
  /* height: $unit-6;
  line-height: $unit-4;
  margin: $unit-h;
  max-width: $control-width-sm; */
  overflow: hidden;
  padding: ${(props) => props.theme.padding["xs"]};
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
`;

export interface Chip {
  children: React.ReactNode;
}

function Chip({ children }: Chip) {
  return <Container>{children}</Container>;
}

export default Chip;
