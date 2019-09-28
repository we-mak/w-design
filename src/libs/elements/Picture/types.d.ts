import { GlobProps } from "../../../typings";
import { WidthProps, HeightProps } from "styled-system";

type srcSetProps = {
  media: string;
  src: string;
};

export interface PictureProps extends GlobProps, HTMLPictureElement {
  dataSrc?: string;
  alt?: string;
  srcSets?: srcSetProps[];
  width?: WidthProps;
  height?: HeightProps;
}
