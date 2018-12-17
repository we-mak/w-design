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
import tag from "clean-tag";
import styled from "../../../utils/styled";
import { GridWrap } from "./GridWrap";

const Column = styled(tag)`
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

class Grid extends React.Component<any> {
  static Column = Column;

  render() {
    const children = React.Children.map(
      this.props.children,
      (child: React.ReactElement<any>) => React.cloneElement(child)
    );

    return <GridWrap {...this.props}>{children}</GridWrap>;
  }
}

Grid.Column.displayName = "Grid.Column";

export default Grid;
