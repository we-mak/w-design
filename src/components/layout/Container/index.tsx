import * as React from "react";
import { ContainerWrap } from "./ContainerWrap";
import { GlobProps } from "../../../typings";

export interface Props extends GlobProps {
  children?: React.ReactChild;
}

/**
 * Container
 *
 * Wrapper layout component contains columns layout
 */
const Container: React.StatelessComponent<Props> = props => (
  <ContainerWrap className={props.className} id={props.id} {...props}>
    {props.children}
  </ContainerWrap>
);

Container.displayName = "Container";

export default Container;
