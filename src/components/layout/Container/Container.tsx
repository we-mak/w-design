/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {ReactChild} children - children components
 * @prop {string} className - tag class property
 */
import * as React from "react";
import styled from "../../../styledConfig/index";

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

/* ${(props: Props) => props.fixedXLarge && `max-width: 1296px`};
  ${(props: Props) => props.fixedLarge && `max-width: 976px`};
  ${(props: Props) => props.fixedMedium && `max-width: 856px`};
  ${(props: Props) => props.fixedSmall && `max-width: 616px`};
  ${(props: Props) => props.fixedXSmall && `max-width: 496px`}; */
