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
import EmptyView from "../EmptyView";
import Divider from "../Divider";
import Typo from "../Typo";
import Spinner from "../Spinner";
import {
  ListContainer,
  ListWrapper,
  MenuList,
  SpinnerWrapper,
  ListFooter,
  EmptyContainer
} from "./Styled";
import { GlobProps } from "../common/props";

export interface ListProps extends GlobProps {
  header?: React.ReactNode;
  footer?: any;
  isLoading?: boolean;
  sourceData?: any[];
  rowKey?: string | ((item: any) => string);
  rows?: (item: any, index: number) => React.ReactNode;
  emptyView?: React.ReactElement;
}

const List: React.FC<ListProps> = ({
  header,
  footer,
  isLoading = false,
  sourceData = [],
  rowKey,
  rows,
  emptyView
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

  let childrenComponent: React.ReactNode | React.ReactNode[];

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
      childrenComponent = <EmptyContainer>{emptyView}</EmptyContainer>;
    } else {
      childrenComponent = (
        <EmptyContainer>
          <EmptyView />
        </EmptyContainer>
      );
    }
  }

  return (
    <ListContainer>
      {header && (
        <>
          <Typo tag="h3" mt="0.4rem" mb="0">
            {header}
          </Typo>
          <Divider />
        </>
      )}

      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}

      <ListWrapper isLoading={isLoading}>
        {childrenComponent}
        {footer}
      </ListWrapper>
    </ListContainer>
  );
};

export default List;
export { ListItem } from "./ListItem";
export { ListFooter };