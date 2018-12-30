import * as React from "react";
import { Column } from "./Column";
import { GridWrap } from "./GridWrap";
import { GlobProps } from "../../../typings";

interface Props extends GlobProps {
  children?: React.ReactChild;
}

class Grid extends React.PureComponent<Props> {
  static Column = Column;

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child as React.ReactElement<HTMLElement>)
    );

    return (
      <GridWrap
        className={this.props.className}
        id={this.props.id}
        {...this.props}
      >
        {children}
      </GridWrap>
    );
  }
}

export default Grid;
