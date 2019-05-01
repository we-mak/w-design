import * as React from "react";
import styled from "styled-components";
import { borderRadius } from "styled-system";
import { CardMediaProps } from "./types";

const CardMediaWrapper = styled.div`
  &:first-child {
    padding-top: 0;
    img {
      border-top-left-radius: ${props => props.theme.radii[2]};
      border-top-right-radius: ${props => props.theme.radii[2]};
      ${borderRadius}
    }
  }
`;
CardMediaWrapper.displayName = "CardMediaWrapper";

const CoverImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
`;
CoverImage.displayName = "CoverImage";

export const CardMedia = ({ imageUrl, ...rest }: CardMediaProps) => {
  return (
    <CardMediaWrapper {...rest}>
      <CoverImage src={imageUrl} />
    </CardMediaWrapper>
  );
};
