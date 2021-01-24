import styled from "styled-components";
import { layout } from "styled-system";

import { ImageRatioProps } from "./ImageRatio";

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
