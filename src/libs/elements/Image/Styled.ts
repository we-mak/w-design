import styled from "styled-components";
import { width, height } from "styled-system";

export const ImageElement = styled.img<HTMLImageElement>`
  ${width};
  ${height};
`;
ImageElement.displayName = "ImageElement";
