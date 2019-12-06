import * as React from "react";
import { Column } from "./Column";
import { Flex, FlexProps } from "./Flex";

class Flexbox extends React.PureComponent<FlexProps> {
  static Column = Column;

  render() {
    const { children, ...rest } = this.props;

    return (
      <Flex {...rest}>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement<HTMLElement>)
        )}
      </Flex>
    );
  }
}

export default Flexbox;
