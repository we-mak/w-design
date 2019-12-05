import * as React from "react";
import styled from "styled-components";
import { Provider, Container, Flexbox, Drawer } from "@w-design/core";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const NavWrapper = styled.header`
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: ${props => props.theme.shadows[1]};
  z-index: 999;
  background-color: white;
`;
NavWrapper.displayName = "NavWrapper";

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
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleToogleMenu = () => setOpenMenu(!openMenu);

  return (
    <Provider theme={theme}>
      <NavWrapper>
        <Container px={4} py={3}>
          <Header toggleMenu={handleToogleMenu} />
        </Container>
      </NavWrapper>

      {/* Mobile Sidebar */}
      <Drawer isOpen={openMenu} onClose={() => setOpenMenu(false)}>
        <Sidebar />
      </Drawer>

      <Container p={3}>
        <Flexbox mb="120px">
          <Flexbox.Column
            width={[0, 0, 0, 1 / 4]}
            display={["none", "none", "none", "flex"]}
          >
            <Sidebar />
          </Flexbox.Column>
          <Flexbox.Column width={[1, 1, 1, 3 / 4]}>{children}</Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
};
