import * as React from "react";
import { Column } from "./Column";
import { GridWrap } from "./GridWrap";

class Grid extends React.PureComponent<any> {
  static Column = Column;

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child as React.ReactElement<any>)
    );

    return <GridWrap {...this.props}>{children}</GridWrap>;
  }
}

export default Grid;
