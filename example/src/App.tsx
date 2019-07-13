import * as React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { Provider, Container, Flexbox } from "w-design";
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

function App() {
  return (
    <Provider
      theme={{
        fonts: {
          normal: "'Montserrat', sans-serif",
          medium: "'Montserrat', sans-serif",
          demi: "'Montserrat', sans-serif",
          bold: "'Montserrat', sans-serif"
        }
      }}
    >
      <GlobalStyles />

      <NavWrapper>
        <Container px={4} py={3} bg={"WHITE"}>
          <Header />
        </Container>
      </NavWrapper>

      <Container p={3} bg={"N1"}>
        <Flexbox mb="120px">
          <Flexbox.Column width={1 / 4}>
            <Sidebar />
          </Flexbox.Column>
          <Flexbox.Column width={3 / 4}>
            <Suspense fallback={<div>Loading...</div>}>
              <Router>
                <Intro path="/" />
                <Start path="/start" />
                <LayoutPage path="/layout" />

                <SpinnerPage path="/spinner" />
                <TypoPage path="/typo" />
                <ButtonPage path="/button" />
                <AvatarPage path="/avatar" />

                <CardPage path="/card" />
                <DropdownPage path="/dropdown" />
                <ModalPage path="/modal" />
                <MenuPage path="/menu" />
                <FormPage path="/form" />
              </Router>
            </Suspense>
          </Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
}
export default App;
