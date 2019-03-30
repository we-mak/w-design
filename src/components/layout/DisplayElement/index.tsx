import * as React from "react";
import styled from "styled-components";
import { display } from "styled-system";

const Base = styled.div`
  ${display}
`;

interface DisplayProps {
  display: string[];
}

const DisplayElement: React.FunctionComponent<DisplayProps> = props => (
  <Base display={props.display} {...props}>
    {props.children}
  </Base>
);

export default DisplayElement;
