import * as React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  list-style-type: none;
  position: relative;
`;

export const TabList = ({
  ariaLabel,
  children
}: {
  children: React.ReactElement[];
  ariaLabel?: string;
}) => {
  return (
    <Wrapper role="tablist" aria-orientation="horizontal" aria-label={ariaLabel}>
      {children}
    </Wrapper>
  );
};
