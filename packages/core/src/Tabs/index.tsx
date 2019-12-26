/*
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * Tabs
 * Tabs component
 */
import * as React from "react";
import styled from "styled-components";
import { TabsContext } from "./TabsContext";
import { TabList } from "./TabList";
import { GlobProps } from "../common/props";
import { TabPanel } from "./TabPanel";
// export
export { Tab } from "./Tab";

const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  min-height: 0;
  position: relative;
  margin: 0.4rem 0;
`;

const Lane = styled.span`
  background-color: rgb(235, 236, 240);
  bottom: 0px;
  content: "";
  height: 2px;
  position: absolute;
  left: 8px;
  right: 8px;
  top: 1.7rem;
  width: inherit;
  border-radius: 2px;
  margin: 0px;
`;

export interface TabsProps extends GlobProps {
  defaultActive?: number;
  children: React.ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ defaultActive = 0, children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultActive);

  const value = React.useMemo(() => {
    return {
      selectedIndex,
      setSelectedIndex
    };
  }, [selectedIndex]);

  const renderTabContent = () => {
    if (children[selectedIndex]) {
      return children[selectedIndex].props.content;
    }
  };

  return (
    <TabsContext.Provider value={value}>
      <Container>
        <Lane></Lane>
        <TabList>
          {React.Children.map(children, (child: React.ReactElement, index: number) => {
            return React.cloneElement(child, {
              // Passing index to define select tab
              index
            });
          })}
        </TabList>

        <TabPanel role="tabpanel">{renderTabContent()}</TabPanel>
      </Container>
    </TabsContext.Provider>
  );
};

export default Tabs;
