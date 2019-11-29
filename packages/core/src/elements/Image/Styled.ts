import styled from "styled-components";
import { width, height, layout } from "styled-system";
import { ImageRatioProps } from "./ImageRatio";

export const ImageElement = styled.img<HTMLImageElement>`
  ${width};
  ${height};
`;
ImageElement.displayName = "ImageElement";

const getRatioStyle = (props: ImageRatioProps) => {
  const { paddingBottom, objectFit } = props;

  return `
  padding-bottom: ${paddingBottom}%;
  img {
    object-fit: ${objectFit};
  }
  `;
};

export const ImageRatioElement = styled.div<ImageRatioProps>`
  height: 0;
  position: relative;
  ${getRatioStyle}
  ${layout}

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
