import * as React from "react";
import { Column } from "./Column";
import { Flex } from "./Flex";
import {
  SpaceProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps
} from "styled-system";

import { GlobProps } from "../../../typings";

export interface FlexboxProps
  extends GlobProps,
    SpaceProps,
    JustifyContentProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps {
  children?: React.ReactChild | React.ReactChild[];
  gapless?: boolean;
  oneline?: boolean;
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
