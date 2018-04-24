/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {any} children children components
 * @prop {string} className tag class property
 * @prop {string} fixSize xlarge(1280), large(960), medium(840), small(600), xsmall(480)
 * @public
 */
import * as React from "react";
import { ContainerWrap } from "./ContainerWrap";

export interface Props {
  children?: React.ReactChild;
  className?: string;
}

const Container: React.StatelessComponent<Props> = props => (
  <ContainerWrap className={props.className} {...props}>
    {props.children}
  </ContainerWrap>
);

export default Container;
