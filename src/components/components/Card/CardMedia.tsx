import * as React from "react";
import styled from "styled-components";
import { borderRadius } from "styled-system";
// import { CardMediaProps } from "./types";
import Picture from "../../elements/Picture";

const CardMediaWrapper = styled.div<any>`
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

const CoverImage = styled(Picture as any)`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
`;
CoverImage.displayName = "CoverImage";

export const CardMedia = ({ srcSets, imageUrl, alt, children, ...rest }: any) => {
  return (
    <CardMediaWrapper {...rest}>
      {imageUrl && <CoverImage dataSrc={imageUrl} srcSets={srcSets} alt={alt} />}
      {children}
    </CardMediaWrapper>
  );
};
