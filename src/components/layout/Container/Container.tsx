/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {ReactChild} children - children components
 * @prop {string} className - tag class property
 */
import * as React from "react";
import styled from "../../../styleUtils/styled";

export interface Props {
  children?: React.ReactChild;
  className?: string;
  fixedXLarge?: boolean;
  fixedLarge?: boolean;
  fixedMedium?: boolean;
  fixedSmall?: boolean;
  fixedXSmall?: boolean;
}

const ContainerEl: React.StatelessComponent<Props> = props => (
  <div className={props.className}>{props.children}</div>
);

const Container = styled(ContainerEl)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  ${(props: Props) => props.fixedXLarge && `max-width: 1296px`};
  ${(props: Props) => props.fixedLarge && `max-width: 976px`};
  ${(props: Props) => props.fixedMedium && `max-width: 856px`};
  ${(props: Props) => props.fixedSmall && `max-width: 616px`};
  ${(props: Props) => props.fixedXSmall && `max-width: 496px`};
`;

export default Container;
