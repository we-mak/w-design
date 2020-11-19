import * as React from "react";
import styled from "styled-components";
import Typo from "../Typo";
import Box from "../Box";
import Image, { ImageRatio } from "../Image";
import { getListItemStyle } from "./getStyled";
import { GlobProps } from "../common/props";

const Container = styled.li`
  ${getListItemStyle}
`;

const ItemMeta = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 0;
`;

const ActionGroup = styled.div`
  align-items: center;
  margin: 0.4rem;
  display: inline-flex;
  > * {
    &:not(:last-child) {
      margin-right: 0.2rem;
    }
  }
`;

const Thumbnail = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
`;

export interface ListItemProps extends GlobProps {
  key?: string | number;
  thumbnail?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  actions?: React.ReactNode;
  hasDivider?: boolean;
  children?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  thumbnail,
  title,
  description,
  actions,
  hasDivider = false,
}) => {
  return (
    <Container hasDivider={hasDivider}>
      <ItemMeta>
        {thumbnail && (
          <Thumbnail>
            <ImageRatio paddingBottom={100} minWidth={36}>
              <Image data-src={thumbnail} />
            </ImageRatio>
          </Thumbnail>
        )}

        <Box alignItems="center" m="0 0.8rem">
          {title && (
            <Typo tag="h4" fontWeight={600} mb={0}>
              {title}
            </Typo>
          )}
          {description && <div>{description}</div>}
        </Box>
      </ItemMeta>

      {children}
      {actions && <ActionGroup>{actions}</ActionGroup>}
    </Container>
  );
};
