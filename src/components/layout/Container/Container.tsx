import * as React from "react";
import styled, { StyledFunction } from "styled-components";

export interface Props {
  children?: any;
}

const div: StyledFunction</*Props here*/ React.HTMLProps<HTMLInputElement>> =
  styled.div;

const Wrapper = div`
  margin-left: auto;
  margin-right: auto;
  padding-left: .4rem;
  padding-right: .4rem;
  width: 100%;
`;

const Container = (props: Props) => <Wrapper>{props.children}</Wrapper>;

export default Container;
