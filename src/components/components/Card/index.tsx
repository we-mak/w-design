import * as React from "react";
import styled from "styled-components";
import { CardProps } from "./types";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = (props: CardProps) => {
  const { header } = props;
  return <CardWrapper>{header}</CardWrapper>;
};

export default Card;
