import styled from "styled-components";

export const ListWrapper = styled.div`
  overflow: visible !important;
`;
ListWrapper.displayName = "ListWrapper";

export const ListFooter = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 0.5em;
  border-top: 1px solid ${props => props.theme.colors["N10"]};
`;
ListFooter.displayName = "ListFooter";

export const MenuList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
`;
MenuList.displayName = "MenuList";
