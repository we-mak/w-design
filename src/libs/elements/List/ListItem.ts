import styled from "styled-components";
import { ListItemProps } from "./types";

export const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 0.05rem solid ${props => props.theme.colors["N3"]};
  }
`;
ListItem.displayName = "ListItem";
