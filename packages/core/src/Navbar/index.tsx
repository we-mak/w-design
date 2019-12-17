import * as React from "react";
import styled from "styled-components";
import { display, DisplayProps } from "styled-system";
import { NavCenter } from "./NavCenter";
import { NavSection } from "./NavSection";
import { GlobProps } from "../common/props";

export interface NavProps extends GlobProps, DisplayProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Nav = styled.nav`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${display}
`;
Nav.displayName = "Nav";

class Navbar extends React.PureComponent<NavProps> {
  static Section = NavSection;
  static Center = NavCenter;

  render() {
    const { id, className, children, ...rest } = this.props;

    return (
      <Nav className={className} id={id} {...rest}>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement<HTMLElement>)
        )}
      </Nav>
    );
  }
}

export default Navbar;
