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

export interface ColProps {
  hideXs?: boolean;
  hideSm?: boolean;
  hideMd?: boolean;
  hideLg?: boolean;
  hideXl?: boolean;
  hideXxl?: boolean;
}

const Column = styled(tag)`
  flex: none;
  max-width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  /**
  * Hidden props
  * TODO:
  * Check why typescript cannot implement ${(props: ColProps) =>
    props.hideXs ? `@media ... {...}` : null}
  * If upper ability is good: refactor to __ props.hide ='key' ~ breakpoint[key]: {....} ~ @media ... {...} __ logic
  */
  @media screen and (max-width: 24em) {
    display: ${(props: ColProps) => (props.hideXs ? `none` : null)}
  }
  @media screen and (min-width: 24em) and (max-width: 32em) {
    display: ${(props: ColProps) => (props.hideSm ? `none` : null)}
  }
  @media screen and (min-width: 32em) and (max-width: 48em) {
    display: ${(props: ColProps) => (props.hideMd ? `none` : null)}
  }
  @media screen and (min-width: 48em) and (max-width: 64em) {
    display: ${(props: ColProps) => (props.hideLg ? `none` : null)}
  }
  @media screen and (min-width: 64em) and (max-width: 80em) {
    display: ${(props: ColProps) => (props.hideXl ? `none` : null)}
  }
  @media screen and (min-width: 80em) {
    display: ${(props: ColProps) => (props.hideXxl ? `none` : null)}
  }

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
