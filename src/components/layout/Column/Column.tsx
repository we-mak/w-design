import * as React from "react";
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf
} from "styled-system";

import styled from "../../../utils/styled";

const Base = styled.div`
  flex: none;
  max-width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;

  /* Custom props with styled-system*/
  ${space}
  ${width}
  ${flex}
  ${color}
  ${fontSize}
  ${order}
  ${alignSelf}

`;

export interface Props {
  /** children components*/
  children?: React.ReactChild;
}

const Column: React.StatelessComponent<Props> = props => <Base {...props} />;

export default Column;
