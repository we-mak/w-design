/**
 * Picture
 * inherit lazy load from Image
 */
import React from "react";
import Image from "../Image";
import { PictureProps } from "./types";
import { Source } from "./Source";

const Picture = ({ srcSets, dataSrc, alt }: PictureProps) => {
  return (
    <picture>
      {srcSets &&
        srcSets.map((s, idx) => (
          <Source key={idx} media={`(max-width: ${s.media}px)`} data-srcset={s.src} />
        ))}
      <Image data-src={dataSrc} alt={alt} />
    </picture>
  );
};

export default Picture;