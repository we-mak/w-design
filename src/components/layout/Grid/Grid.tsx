import * as React from "react";
import styled from "../../../utils/styled";
import GridWrap from "./GridWrap";

const Column = styled.div`
  flex: 1;
  max-width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
`;

export interface Props {}

class Grid extends React.PureComponent<Props, {}> {
  static Column = Column;

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child as any)
    );

    return <GridWrap {...this.props}>{children}</GridWrap>;
  }
}

export default Grid;
