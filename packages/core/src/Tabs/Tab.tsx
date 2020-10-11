import * as React from "react";
import styled from "styled-components";
import { GlobProps } from "../common/props";
import { useTab } from "./TabsContext";

export interface TabProps extends GlobProps {
  index: number;
  isSelected: boolean;
  children?: React.ReactNode;
  // Wai-Aria
  tabIndex?: 0 | -1;
  ariaControls?: string;
}

const TabButton = styled.button<TabProps>`
  appearance: none;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.4rem;
  border: none;
  border-bottom: 2px solid
    ${(props) => {
      const { theme, isSelected } = props;
      return isSelected ? theme.colors["B50"] : "rgb(235, 236, 240)";
    }};
`;

export const Tab: React.FC<TabProps> = ({ index, tabIndex = 0, children, ...rest }) => {
  const { selectedIndex, onSelectTab } = useTab();
  const handleTab = () => onSelectTab(index);

  return (
    <TabButton
      {...rest}
      role="tab"
      index={index}
      onClick={handleTab}
      aria-selected={selectedIndex === index ? true : false}
      tabIndex={tabIndex}
      isSelected={selectedIndex === index ? true : false}
    >
      {children}
    </TabButton>
  );
};
