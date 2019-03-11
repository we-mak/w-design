import * as React from "react";
import styled from "styled-components";
import { GlobProps } from "../../../typings";
import { NavCenter } from "./NavCenter";
import { NavSection } from "./NavSection";

interface NavProps extends GlobProps {
  children?: React.ReactChild | React.ReactChild[];
}

const Nav = styled.header`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
