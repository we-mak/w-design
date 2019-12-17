/**
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * Collapse
 * A collapsible content. It's can be expended or collapsed.
 */
import * as React from "react";
import styled from 'styled-components'
import CustomTag from '../CustomTag'
import { getCollapseContainerStyle } from "./Styled"
import { GlobProps } from "../common/props";

export interface CollapseProps extends GlobProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const Container = styled(CustomTag)`
  ${getCollapseContainerStyle}
`

const Collapse: React.FC<CollapseProps> = ({ children }) => {
  return <Container>
    {children}
  </Container>;
};

export default Collapse;
