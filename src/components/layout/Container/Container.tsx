import * as React from "react";
import styled from "../../../utils/styled";

export interface Props {
  children?: any;
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
`;

const Container = (props: Props) => <Wrapper>{props.children}</Wrapper>;

export default Container;
