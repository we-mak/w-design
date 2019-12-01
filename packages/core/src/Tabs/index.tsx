/*
 * Tabs
 * Tab components
 */
import * as React from "react";
import { TabsContainer, TabsList, Tab } from "./Styled";

const Tabs = () => {
  return (
    <TabsContainer>
      <TabsList role="tablist" aria-orientation="horizontal">
        <Tab>Tabs</Tab>
      </TabsList>
    </TabsContainer>
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
