import * as React from "react";
import { Column } from "./Column";
import { Flex, FlexProps } from "./Flex";
import { GlobProps } from "../../../typings";

interface FlexboxProps extends GlobProps, FlexProps {
  children?: React.ReactChild | React.ReactChild[];
}

class Flexbox extends React.PureComponent<FlexboxProps> {
  static Column = Column;

  render() {
    const { id, className, children, ...rest } = this.props;

    return (
      <Flex className={className} id={id} {...rest}>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement<HTMLElement>)
        )}
      </Flex>
    );
  }
}

export default Flexbox;
