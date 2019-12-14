import * as React from "react";
import Typo from "../Typo";
import Image, { ImageRatio } from "../Image";
import {
  ListItemStyled,
  ListItemMeta,
  ListItemMetaInfo,
  ListItemActionGroup,
  ThumbContainer
} from "./Styled";
import { GlobProps } from "../common/props";

export interface ListItemProps extends GlobProps {
  key?: string | number;
  thumbnail?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  actions?: React.ReactNode[];
  hasDivider?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

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
            <ImageRatio paddingBottom={100} minWidth={36}>
              <Image data-src={thumbnail} />
            </ImageRatio>
          </ThumbContainer>
        )}

        <ListItemMetaInfo>
          {title && (
            <Typo tag="h4" fontWeight={600} mb={0}>
              {title}
            </Typo>
          )}
          {description && <div>{description}</div>}
        </ListItemMetaInfo>
      </ListItemMeta>

      {children}
      {actions && <ListItemActionGroup>{actions}</ListItemActionGroup>}
    </ListItemStyled>
  );
};
