import * as React from "react";
import { Dropdown, Menu, MenuItem, Box } from "@w-design/core";

export default () => {
  return (
    <Dropdown
      title="Dropdown"
      content={
        <Menu>
          <MenuItem key="1">
            <Box
              width="100%"
              height="100%"
              onClick={() => {
                alert("clicked");
              }}
            >
              Item 1
            </Box>
          </MenuItem>
          <MenuItem key="2">
            <Box width="100%" height="100%">
              Item 2
            </Box>
          </MenuItem>
          <MenuItem key="3">
            <Box width="100%" height="100%">
              Item 3
            </Box>
          </MenuItem>
          <MenuItem key="4">
            <Box width="100%" height="100%">
              Item 4
            </Box>
          </MenuItem>
        </Menu>
      }
    />
  );
};
