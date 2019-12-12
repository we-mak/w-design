import * as React from "react";
import { Column } from "./Column";
import * as FlexElement from "./Flex";

class Flexbox extends React.PureComponent<FlexElement.FlexProps> {
  static Column = Column;

  render() {
    const { children, ...rest } = this.props;

    return (
      <FlexElement.Flex {...rest}>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement<HTMLElement>)
        )}
      </FlexElement.Flex>
    );
  }
}

export default Flexbox;
