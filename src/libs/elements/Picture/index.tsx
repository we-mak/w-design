/**
 * Picture
 * inherit lazy load from Image
 */
import React, { FC } from "react";
import Image from "../Image";
import { PictureProps } from "./types";
import { Source } from "./Source";

const Picture: FC<PictureProps> = ({ srcSets, alt, dataSrc, width, height, ...rest }) => {
  return (
    <picture>
      {srcSets &&
        srcSets.map((s, idx) => (
          <Source key={idx} media={`(max-width: ${s.media}px)`} data-srcset={s.src} />
        ))}
      <Image data-src={dataSrc} alt={alt} width={width} height={height} {...rest} />
    </picture>
  );
};

export default Picture;
