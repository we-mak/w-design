/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {any} children children components
 * @prop {string} className tag class property
 * @public
 */
import * as React from "react";
import styled from "../../../styledConfig/index";

export interface StyleProps {
  fixedXLg?: boolean;
  fixedLg?: boolean;
  fixedMd?: boolean;
  fixedSm?: boolean;
  fixedXSm?: boolean;
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  ${(props: StyleProps) => props.fixedXLg && `max-width: 1296px`};
  ${(props: StyleProps) => props.fixedLg && `max-width: 976px`};
  ${(props: StyleProps) => props.fixedMd && `max-width: 856px`};
  ${(props: StyleProps) => props.fixedSm && `max-width: 616px`};
  ${(props: StyleProps) => props.fixedXSm && `max-width: 496px`};
`;

export interface Props {
  children?: React.ReactChild;
  className?: string;
}

const Container: React.StatelessComponent<Props> = props => (
  <Wrapper className={props.className} {...props}>
    {props.children}
  </Wrapper>
);

export default Container;
