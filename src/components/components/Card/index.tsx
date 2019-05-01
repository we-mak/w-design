import * as React from "react";
import styled, { css } from "styled-components";
import { space, border, borderRadius } from "styled-system";
import { CardHeader } from "./CardHeader";
import { CardMedia } from "./CardMedia";
import { CardContent } from "./CardContent";
import { CardProps } from "./types";

const getCardStyle = (props: CardProps) => {
  return css`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: ${props.theme.radii[2]};
    box-shadow: ${props.theme.shadows[2]};

    ${props.raised &&
      `
    transition: box-shadow 0.2s cubic-bezier(0.5, 0.045, 0.4, 1);
    &:hover {
      box-shadow: ${props.theme.shadows[4]}
    }
    `}
  `;
};

const CardWrapper = styled.div`
  ${getCardStyle}
  ${space}
  ${border}
  ${borderRadius}
`;
CardWrapper.displayName = "CardWrapper";

const Card = ({ children, ...rest }: CardProps) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
};

const CardFooter = styled.div`
  padding: 0.8rem;
`;
CardFooter.displayName = "CardFooter";

export default Card;
export { CardMedia, CardHeader, CardContent, CardFooter };
