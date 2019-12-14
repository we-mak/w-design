import * as React from "react";
import styled from "styled-components";
import { borderRadius } from "styled-system";
import Picture from "../Picture";
import { PictureProps } from "../Picture";
import { GlobProps } from "../common/props";

export interface CardMediaProps extends GlobProps, PictureProps {
  // image cover url
  imageUrl?: string;
  children?: React.ReactChild;
  alt?: string;
}

const CardMediaWrapper = styled.div<any>`
  &:first-child {
    padding-top: 0;
    img {
      border-top-left-radius: ${props => props.theme.radii[2]};
      border-top-right-radius: ${props => props.theme.radii[2]};
      ${borderRadius}
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
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

export const CardMedia = ({ srcSets, imageUrl, alt, children, ...rest }: CardMediaProps) => {
  return (
    <CardMediaWrapper {...rest}>
      {imageUrl && <CoverImage dataSrc={imageUrl} srcSets={srcSets} alt={alt} />}
      {children}
    </CardMediaWrapper>
  );
};
