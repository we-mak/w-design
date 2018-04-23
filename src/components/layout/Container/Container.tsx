/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {ReactChild} children - children components
 * @prop {string} className - tag class property
 */
import * as React from "react";
import styled from "../../../styledConfig/styled";

interface Props {
  children?: React.ReactChild;
  className?: string;
  // fixedXLg: boolean;
  // fixedLg: boolean;
  // fixedMd: boolean;
  // fixedSm: boolean;
  // fixedXSm: boolean;
}

const ContainerEl: React.SFC<Props> = props => (
  <div className={props.className} {...props}>
    {props.children}
  </div>
);

const Container = styled(ContainerEl)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
`;

export default Container;

// ${(props: Props) => props.fixedXLg && `max-width: 1296px`};
// ${(props: Props) => props.fixedLg && `max-width: 976px`};
// ${(props: Props) => props.fixedMd && `max-width: 856px`};
// ${(props: Props) => props.fixedSm && `max-width: 616px`};
// ${(props: Props) => props.fixedXSm && `max-width: 496px`};
