/**
 * List.tsx
 * A list of content blocks have same object structure.
 * Concept
 * - Get array items data
 * - If array is empty, return emptyView
 * - If array length > 0, render the items list with ListItem element
 * - Spinner exists if data is loading

 * Example Usage
 <List
  header="List header"
  isLoading
  itemData={[{
    ...data
  }]}

  renderItem={item => {
    return (
      <ListItem
        thumbnail="*image"
        title="Item title"
        description="Item description"
        actions=[...actionlist]
      >
        List item child content
      </ListItem>
    )
  }}
 ></List>
 */
import * as React from "react";
import { ListContainer, ListWrapper, MenuList, SpinnerWrapper } from "./Styled";
import { ListProps } from "./types";
import Spinner from "../Spinner";
import Typo from "../Typo";
import Divider from "../Divider";

const List: React.FC<ListProps> = ({
  header,
  footer,
  isLoading = false,
  sourceData = [],
  rowKey,
  rows
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
    childrenComponent = <div>Empty</div>;
  }

  return (
    <ListContainer>
      {header && (
        <>
          <Typo tag="h3" mt="0.4rem" mb="0.2rem">
            {header}
          </Typo>
          <Divider />
        </>
      )}

      {isLoading && (
        <SpinnerWrapper>
          <Spinner large />
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
export { ListFooter } from "./Styled";