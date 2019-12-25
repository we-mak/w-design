/*
 * Tabs
 * Tab components
 */
import * as React from "react";
import styled from "styled-components";
import { TabsList, Tab } from "./getStyled";

const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  min-height: 0%;
`;

const Tabs = () => {
  return (
    <Container>
      <TabsList role="tablist" aria-orientation="horizontal">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabsList>
    </Container>
  );
};

export default Tabs;

// class Tabs extends React.PureComponent {
//   state = {
//     activeTabIndex: 0
//   };

//   handleTabClick = tabIndex => {
//     this.setState({
//       activeTabIndex: tabIndex
//     });
//   };

//   renderChildrenTab() {
//     return React.Children.map(this.props.children, (child, index) =>
//       React.cloneElement(child, {
//         onClick: this.handleTabClick,
//         tabIndex: index,
//         isActive: index === this.state.activeTabIndex
//       })
//     );
//   }

//   renderActiveContent() {
//     //eslint-disable-line
//     const { children } = this.props;
//     const { activeTabIndex } = this.state;
//     if (children[activeTabIndex]) {
//       return children[activeTabIndex].props.children;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <TabTitle modalTab>{this.renderChildrenTab()}</TabTitle>
//         <TabContent role="tabpanel">{this.renderActiveContent()}</TabContent>
//       </div>
//     );
//   }
// }
