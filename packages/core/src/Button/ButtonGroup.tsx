/**
 * Button Group
 */
import * as React from "react";
import styled from "styled-components";
import { InlineGroupItemStyle } from "../common/generic";
import Box from "../Box";

const GroupItem = styled.div`
  ${InlineGroupItemStyle}
`;

export const ButtonGroup: React.FC<React.ReactNode> = ({ children }) => (
  <Box display="inline-flex">
    {React.Children.map(children, (child, idx) => {
      return (
        <GroupItem key={idx}>
          {React.cloneElement(child as JSX.Element)}
        </GroupItem>
      );
    })}
  </Box>
);
