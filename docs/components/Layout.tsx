import * as React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: ${props => props.theme.shadows[1]};
  z-index: 999;
`;

type LayoutType = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutType> = ({ children }) => {
  return <>{children}</>;
};
