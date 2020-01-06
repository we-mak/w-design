import { css } from "styled-components";
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
import { ListProps } from ".";
import { ListItemProps } from "./ListItem";

export const getListContainerStyle = ({ isLoading }: ListProps) => css`
  overflow: visible !important;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  position: relative;
  opacity: ${isLoading && `0.5`};
`;

export const getListItemStyle = (props: ListItemProps) => {
  const { theme, hasDivider } = props;

  let divider = hasDivider
    ? `
  &:not(:last-child) {
    border-bottom: 0.05rem solid ${theme.colors["N3"]};
  }`
    : ``;

  return css`
    display: flex;
    align-items: center;
    ${mediaQ.md`display: block;`}
    ${divider}
  `;
};

export interface ListFooterProps extends GlobProps, BorderProps, MarginProps, JustifyContentProps {}

export const getFooterStyle = ({ theme }: ListFooterProps) => css`
  display: flex;
  padding-top: 0.5em;
  border-top: 1px solid ${theme.colors["N5"]};
  ${border};
  ${margin};
  ${justifyContent};
`;
