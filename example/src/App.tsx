import * as React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { Provider, Container, Flexbox, Drawer } from "w-design";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Intro from "./pages/Intro";
import Start from "./pages/Start";
import AvatarPage from "./pages/AvatarPage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import DropdownPage from "./pages/DropdownPage";
import FormPage from "./pages/FormPage";
import LayoutPage from "./pages/LayoutPage";
import MenuPage from "./pages/MenuPage";
import ModalPage from "./pages/ModalPage";
import SpinnerPage from "./pages/SpinnerPage";
import TypoPage from "./pages/TypoPage";
import { GlobalStyles } from "./globalStyles";

const { Suspense } = React;

const NavWrapper = styled.div`
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  box-shadow: ${props => props.theme.shadows[1]};
  z-index: 999;
`;

const baseUrl = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

const theme = {
  fonts: {
    normal: "'Montserrat', sans-serif",
    medium: "'Montserrat', sans-serif",
    demi: "'Montserrat', sans-serif",
    bold: "'Montserrat', sans-serif"
  }
};

function App() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleToogleMenu = () => setOpenMenu(!openMenu);
  return (
    <Provider theme={theme}>
      <GlobalStyles />

      <NavWrapper>
        <Container px={4} py={3} bg={"WHITE"}>
          <Header toggleMenu={handleToogleMenu} />
        </Container>
      </NavWrapper>

      <Drawer isOpen={openMenu} onClose={() => setOpenMenu(false)}>
        <Sidebar />
      </Drawer>

      <Container p={3} bg={"N1"}>
        <Flexbox mb="120px">
          <Flexbox.Column width={[0, 0, 0, 1 / 4]} display={["none", "none", "none", "flex"]}>
            <Sidebar />
          </Flexbox.Column>

          <Flexbox.Column width={[1, 1, 1, 3 / 4]}>
            <Suspense fallback={<div>Loading...</div>}>
              <Router>
                <Intro path={baseUrl + "/"} />
                <Start path={baseUrl + "/start"} />
                <LayoutPage path={baseUrl + "/layout"} />

                <SpinnerPage path={baseUrl + "/spinner"} />
                <TypoPage path={baseUrl + "/typo"} />
                <ButtonPage path={baseUrl + "/button"} />
                <AvatarPage path={baseUrl + "/avatar"} />

                <CardPage path={baseUrl + "/card"} />
                <DropdownPage path={baseUrl + "/dropdown"} />
                <ModalPage path={baseUrl + "/modal"} />
                <MenuPage path={baseUrl + "/menu"} />
                <FormPage path={baseUrl + "/form"} />
              </Router>
            </Suspense>
          </Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
}
export default App;
