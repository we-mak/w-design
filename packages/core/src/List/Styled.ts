import styled from "styled-components";
import {
  border,
  margin,
  justifyContent,
  BorderProps,
  MarginProps,
  JustifyContentProps
} from "styled-system";
import { mediaQ } from "@w-design/helpers";
import { GlobProps } from "../common/props";
import { ListProps } from "./";
import { ListItemProps } from "./ListItem";

export interface ListFooterProps extends GlobProps, BorderProps, MarginProps, JustifyContentProps {}

export const ListContainer = styled.div`
  position: relative;
`;
ListContainer.displayName = "ListContainer";

export const ListWrapper = styled.div<ListProps>`
  overflow: visible !important;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  position: relative;
  opacity: ${props => props.isLoading && `0.5`};
`;
ListWrapper.displayName = "ListWrapper";

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 300;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
`;
SpinnerWrapper.displayName = "SpinnerWrapper";

export const MenuList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
`;
MenuList.displayName = "MenuList";

const getItemStyle = (props: ListItemProps) => {
  const { theme, hasDivider } = props;
  if (hasDivider) {
    return `
  &:not(:last-child) {
    border-bottom: 0.05rem solid ${theme.colors["N3"]};
  }
  `;
  }
  return ``;
};

export const ListItemStyled = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  ${mediaQ.md`display: block;`}
  ${getItemStyle}
`;
ListItemStyled.displayName = "ListItemStyled";

export const ListItemMeta = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 0;
`;
ListItemMeta.displayName = "ListItemMeta";

export const ListItemMetaInfo = styled.div`
  align-items: center;
  margin: 0 0.8rem;
`;
ListItemMetaInfo.displayName = "ListItemMetaInfo";

export const ListItemActionGroup = styled.div`
  align-items: center;
  margin: 0.4rem;
  display: inline-flex;
  > * {
    &:not(:last-child) {
      margin-right: 0.2rem;
    }
  }
`;
ListItemActionGroup.displayName = "ListItemActionGroup";

export const ThumbContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
`;
ThumbContainer.displayName = "ThumbContainer";

export const ListFooter = styled.div<ListFooterProps>`
  display: flex;
  padding-top: 0.5em;
  border-top: 1px solid ${props => props.theme.colors["N5"]};
  ${border};
  ${margin};
  ${justifyContent};
`;
ListFooter.displayName = "ListFooter";

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
EmptyContainer.displayName = "EmptyContainer";
