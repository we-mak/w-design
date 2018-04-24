/**
 * Container
 * Wrapper layout component contains columns layout
 * @prop {any} children children components
 * @prop {string} className tag class property
 * @prop {string} fixSize xlarge(1280), large(960), medium(840), small(600), xsmall(480)
 * @public
 */
import * as React from "react";
import styled from "../../../styledConfig/index";

const fixed = (size: string) => {
  const sizes = {
    xlarge() {
      return "1296px";
    },
    large() {
      return "976px";
    },
    medium() {
      return "856px";
    },
    small() {
      return "616px";
    },
    xsmall() {
      return "496px";
    }
  };
  return sizes[size];
};

export interface StyleProps {
  fixSize?: string;
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  max-width: ${(props: StyleProps) =>
    props.fixSize ? fixed(props.fixSize) : null};
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
