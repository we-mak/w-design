import * as React from "react";
import styled from "styled-components";
import { Provider, Container } from "@w-design/core";

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

const theme = {
  fonts: {
    normal: "'Montserrat', sans-serif",
    medium: "'Montserrat', sans-serif",
    demi: "'Montserrat', sans-serif",
    bold: "'Montserrat', sans-serif"
  }
};

type LayoutType = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <Provider theme={theme}>
      <NavWrapper>
        <Container px={4} py={3} bg={"WHITE"}>
          Container
        </Container>
      </NavWrapper>
      {children}
    </Provider>
  );
};
