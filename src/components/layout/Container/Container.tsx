/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {any} children - children components
 */
import * as React from "react";
import styled from "../../../utils/styled";

export interface Props {
  children?: React.ReactChild;
  className?: string;
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
`;

const Container: React.StatelessComponent<Props> = props => (
  <Wrapper className={props.className}>{props.children}</Wrapper>
);

export default Container;
