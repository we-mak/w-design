import * as React from "react";
import Image, { ImageRatio } from "../../elements/Image";
import Typo from "../Typo";
import {
  ListItemStyled,
  ListItemMeta,
  ListItemMetaInfo,
  ListItemActionGroup,
  ThumbContainer
} from "./Styled";
import { ListItemProps } from "./types";

export const ListItem: React.FC<ListItemProps> = ({
  children,
  thumbnail,
  title,
  description,
  actions,
  hasDivider = false
}) => {
  return (
    <ListItemStyled hasDivider={hasDivider}>
      <ListItemMeta>
        {thumbnail && (
          <ThumbContainer>
            <ImageRatio paddingBottom={100}>
              <Image data-src={thumbnail} />
            </ImageRatio>
          </ThumbContainer>
        )}

        <ListItemMetaInfo>
          <Typo tag="h4" fontWeight={600} marginBottom={0}>
            {title}
          </Typo>
          <div>{description}</div>
        </ListItemMetaInfo>
      </ListItemMeta>

      <ListItemMetaInfo>{children}</ListItemMetaInfo>
      <ListItemActionGroup>{actions}</ListItemActionGroup>
    </ListItemStyled>
  );
};
