import * as React from "react";
import styled from "styled-components";
import { InlineGroupItemStyle } from "../common/generic";
import Box from "../Box";
import Button from "../Button";

const Item = styled.span`
  ${InlineGroupItemStyle}
`;

export interface Pagination {
  pages: number[];
  defaultSelectedIndex?: number;
  onChange?: () => void;
}

const Pagination: React.FC<Pagination> = ({
  pages,
  defaultSelectedIndex = 0,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(
    defaultSelectedIndex
  );

  const handleMovePreviousPage = () => {
    setSelectedIndex((currentIndex) => currentIndex - 1);
  };
  const handleMoveNextPage = () => {
    setSelectedIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <Box display="inline-flex">
      <Item>
        <Button
          appearance="clean"
          iconOnly
          ariaLabel="previous"
          tabIndex={0}
          isDisabled={selectedIndex === 0}
          onClick={handleMovePreviousPage}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M9.005 10.995l4.593-4.593a.99.99 0 111.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9.005 12.41a1 1 0 010-1.414z"
            ></path>
          </svg>
        </Button>
      </Item>

      {pages.map((p) => {
        return (
          <Item key={p}>
            <Button isSelected={p === selectedIndex + 1} appearance="subtle">
              {p}
            </Button>
          </Item>
        );
      })}
      <Item>
        <Button
          appearance="subtle"
          iconOnly
          ariaLabel="next"
          tabIndex={0}
          isDisabled={selectedIndex === pages.length - 1}
          onClick={handleMoveNextPage}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M14.995 10.995a1 1 0 010 1.414l-4.593 4.593a.99.99 0 01-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 011.4-1.4l4.593 4.593z"
            ></path>
          </svg>
        </Button>
      </Item>
    </Box>
  );
};

export default Pagination;
