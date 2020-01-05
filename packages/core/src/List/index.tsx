/**
 * List.tsx
 * A list of content blocks have same object structure.
 * Concept
 * - Get array items data
 * - If array is empty, return emptyView
 * - If array length > 0, render the items list with ListItem element
 * - Spinner exists if data is loading
 */
import * as React from "react";
import styled from "styled-components";
import EmptyView from "../EmptyView";
import Divider from "../Divider";
import Typo from "../Typo";
import Box from "../Box";
import Spinner from "../Spinner";
import { ListWrapper, ListFooter } from "./Styled";
import { GlobProps } from "../common/props";

const SpinContainer = styled.div`
  position: absolute;
  z-index: 300;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
`;

const MenuList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export interface ListProps extends GlobProps {
  header?: React.ReactNode;
  footer?: any;
  isLoading?: boolean;
  sourceData?: any[];
  rowKey?: string | ((item: any) => string);
  rows?: (item: any, index: number) => React.ReactNode;
  emptyView?: React.ReactElement;
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = ({
  header,
  footer,
  isLoading = false,
  sourceData = [],
  rowKey,
  rows,
  emptyView,
  children
}) => {
  let keys: { [key: string]: string } = {};

  const renderItem = (item: any, index: number) => {
    if (!rows) return null;
    let key;

    if (typeof rowKey === "function") {
      key = rowKey(item);
    } else if (typeof rowKey === "string") {
      key = item[rowKey];
    } else {
      key = item.key;
    }

    if (!key) {
      key = `item-${index}`;
    }

    keys[index] = key;

    return rows(item, index);
  };

  let childrenComponent: React.ReactNode = <MenuList>{children}</MenuList>;

  if (sourceData.length > 0) {
    const items = sourceData.map((item: any, index: number) => renderItem(item, index));

    const childrenList: Array<React.ReactNode> = [];

    React.Children.forEach(items, (child: any, index) => {
      childrenList.push(
        React.cloneElement(child, {
          key: keys[index]
        })
      );
    });

    childrenComponent = <MenuList>{childrenList}</MenuList>;
  } else if (!isLoading) {
    if (emptyView) {
      childrenComponent = (
        <Box display="flex" justifyContent="center">
          {emptyView}
        </Box>
      );
    } else if (!children) {
      childrenComponent = (
        <Box display="flex" justifyContent="center">
          <EmptyView />
        </Box>
      );
    }
  }

  return (
    <Box position="relative">
      {header && (
        <>
          <Typo tag="h3" mt="0.4rem" mb="0">
            {header}
          </Typo>
          <Divider />
        </>
      )}

      {isLoading && (
        <SpinContainer>
          <Spinner />
        </SpinContainer>
      )}

      <ListWrapper isLoading={isLoading}>
        {childrenComponent}
        {footer}
      </ListWrapper>
    </Box>
  );
};

export default List;
export { ListItem } from "./ListItem";
export { ListFooter };
