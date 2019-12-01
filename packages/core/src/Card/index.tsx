import * as React from "react";
import styled, { css } from "styled-components";
import { space, border, borderRadius } from "styled-system";
import { fadeInOut } from "@w-design/helpers";
import { CardHeader } from "./CardHeader";
import { CardMedia } from "./CardMedia";
import { CardContent } from "./CardContent";
import { CardProps, CardMediaProps, CardHeaderProps } from "./types";

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

const CardLoading = styled.div`
  font-size: 0;
  line-height: 0;
  width: 100%;
`;
CardLoading.displayName = "CardLoading";

const ImagePlaceHolder = styled.div`
  background: ${props => props.theme.colors["N5"]};
  width: 100%;
  min-height: 180px;
  animation: ${fadeInOut} 1.5s infinite;
`;
ImagePlaceHolder.displayName = "ImagePlaceHolder";

const ContentPlaceHolder = styled.div`
  padding: 0.8rem;
  display: block;
  width: 100%;
  opacity: 0.1;
  animation: ${fadeInOut} 1.5s infinite;
  h3 {
    background: ${props => props.theme.colors["N10"]};
    background-size: 400% 100%;
    width: 50%;
    height: 1rem;
    border-radius: 0.5rem;
  }
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
  }
  li {
    background: ${props => props.theme.colors["N5"]};
    background-size: 400% 100%;
    height: 1rem;
    margin: 0.4rem 0;
    border-radius: 0.5rem;
  }
`;
ContentPlaceHolder.displayName = "ContentPlaceHolder";

const Card = ({ children, isLoading, ...rest }: CardProps) => {
  return (
    <CardWrapper {...rest}>
      {isLoading ? (
        <CardLoading>
          <ImagePlaceHolder />
          <ContentPlaceHolder>
            <h3 />
            <ul>
              <li />
              <li />
            </ul>
          </ContentPlaceHolder>
        </CardLoading>
      ) : (
        children
      )}
    </CardWrapper>
  );
};

const CardFooter = styled.div`
  padding: 0.8rem;
`;
CardFooter.displayName = "CardFooter";

export default Card;
export {
  CardMedia,
  CardHeader,
  CardContent,
  CardFooter,
  CardProps,
  CardMediaProps,
  CardHeaderProps
};
