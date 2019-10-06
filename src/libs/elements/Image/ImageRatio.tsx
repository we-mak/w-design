/**
 * ImageRatio
 * An image container contain base on ratio
 * Default ratio is 16/9
 */
import * as React from "react";
import { ImageRatioElement } from "./Styled";

export interface ImageRatioProps {
  paddingBottom?: number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  children: React.ReactNode;
}

export const ImageRatio: React.FC<ImageRatioProps> = ({
  children,
  paddingBottom = 56.25,
  objectFit = "cover"
}) => {
  return (
    <ImageRatioElement paddingBottom={paddingBottom} objectFit={objectFit}>
      {children}
    </ImageRatioElement>
  );
};
