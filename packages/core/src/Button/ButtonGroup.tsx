/**
 * Button Group
 */
import * as React from "react";
import styled from "styled-components";
import Box from "../Box";

const GroupItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  & + &::before {
    content: "";
    display: inline-block;
    width: 0.4rem;
  }
`;

export const ButtonGroup: React.FC<React.ReactNode> = ({ children }) => (
  <Box display="inline-flex">
    {React.Children.map(children, (child, idx) => {
      return <GroupItem key={idx}>{React.cloneElement(child as JSX.Element)}</GroupItem>;
    })}
  </Box>
);
