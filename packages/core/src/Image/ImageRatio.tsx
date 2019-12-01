/**
 * ImageRatio
 * An image container contain base on ratio
 * Default ratio is 16/9
 */
import * as React from "react";
import { LayoutProps } from "styled-system";
import { ImageRatioElement } from "./Styled";

export interface ImageRatioProps extends LayoutProps {
  paddingBottom?: number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  children: React.ReactNode;
}

export const ImageRatio: React.FC<ImageRatioProps> = ({
  children,
  paddingBottom = 56.25,
  objectFit = "cover",
  ...rest
}) => {
  return (
    <ImageRatioElement paddingBottom={paddingBottom} objectFit={objectFit} {...rest}>
      {children}
    </ImageRatioElement>
  );
};
