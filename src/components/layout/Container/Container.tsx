import * as React from "react";
import { ContainerWrap } from "./ContainerWrap";

export interface Props {
  /** children components*/
  children?: React.ReactChild;
  /** tag class property */
  className?: string;
}

/**
 * Container
 *
 * Wrapper layout component contains columns layout
 */
const Container: React.StatelessComponent<Props> = props => (
  <ContainerWrap className={props.className} {...props}>
    {props.children}
  </ContainerWrap>
);

export default Container;
