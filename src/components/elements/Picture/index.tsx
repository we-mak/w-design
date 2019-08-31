/**
 * Picture
 * inherit lazy load from Image
 */
import React from "react";
import Image from "../Image";
import { PictureProps } from "./types";
import { Source } from "./Source";

const Picture = ({ srcSets, dataSrc, ...rest }: PictureProps) => {
  return (
    <picture>
      {srcSets &&
        srcSets.map((s, idx) => (
          <Source key={idx} media={`(max-width: ${s.media}px)`} data-srcset={s.src} />
        ))}
      <Image data-src={dataSrc} {...rest} />
    </picture>
  );
};

export default Picture;
