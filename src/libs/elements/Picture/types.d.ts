import { GlobProps } from "../../../typings";

type srcSetProps = {
  media: string;
  src: string;
};

export interface PictureProps extends GlobProps {
  dataSrc?: string;
  alt?: string;
  srcSets?: srcSetProps[];
}
