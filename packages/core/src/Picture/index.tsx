/**
 * Picture
 * inherit lazy load from Image
 */
import React, { FC } from "react";
import { WidthProps, HeightProps } from "styled-system";
import Image from "../Image";
import { Source } from "./Source";
import { GlobProps } from "../common/props";

type srcSetProps = {
  media: string;
  src: string;
};

export interface PictureProps extends GlobProps {
  dataSrc?: string;
  alt?: string;
  srcSets?: srcSetProps[];
  width?: WidthProps;
  height?: HeightProps;
}

const Picture: FC<PictureProps> = ({
  srcSets,
  alt,
  dataSrc,
  width,
  height,
  ...rest
}) => {
  return (
    <picture>
      {srcSets &&
        srcSets.map((s, idx) => (
          <Source
            key={idx}
            media={`(max-width: ${s.media}px)`}
            data-srcset={s.src}
          />
        ))}
      <Image
        dataSrc={dataSrc}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
    </picture>
  );
};

export default Picture;
