import { GlobProps } from "../../../typings";

export interface PictureProps extends GlobProps, HTMLPictureElement {
  dataSrc?: string;
  srcSets?: HTMLSourceElement[];
}
