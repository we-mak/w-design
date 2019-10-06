import * as React from "react";
import ProgressLoader from "../../elements/ProgressLoader";
import Image, { ImageRatio } from "../../elements/Image";
import { UploadListProps } from "./types";
import { ListContainer, ThumbContainer } from "./Styled";

export const FileList: React.FC<UploadListProps> = () => {
  return (
    <ListContainer>
      <ThumbContainer>
        <ImageRatio paddingBottom={100}>
          <Image data-src="https://source.unsplash.com/random/100" />
        </ImageRatio>
      </ThumbContainer>
      <div>
        <div>this is the file name</div>
        <ProgressLoader size="sm" percent={20} />
      </div>
    </ListContainer>
  );
};
