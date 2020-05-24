import * as React from "react";
import styled from "styled-components";
import { display } from "styled-system";
import { GlobProps } from "../common/props";

const Base = styled.div`
  ${display}
`;

export interface DisplayProps extends GlobProps {
  display: string[];
}

const DisplayElement: React.FunctionComponent<DisplayProps> = (props) => (
  <Base {...props}>{props.children}</Base>
);

export default DisplayElement;
