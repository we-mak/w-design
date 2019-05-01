import * as React from "react";
import styled from "styled-components";
import { space, border, borderRadius } from "styled-system";
import { CardHeader } from "./CardHeader";
import { CardMedia } from "./CardMedia";
import { CardProps } from "./types";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: ${props => props.theme.radii[2]};
  ${space}
  ${border}
  ${borderRadius}
`;
CardWrapper.displayName = "CardWrapper";

const Card = ({ children, ...rest }: CardProps) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
};

export default Card;
export { CardMedia, CardHeader };
