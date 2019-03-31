import React, { Suspense } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { Provider, Container, Flexbox } from "w-design";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Intro from "./pages/Intro";
import Start from "./pages/Start";
import AvatarPage from "./pages/AvatarPage";
import ButtonPage from "./pages/ButtonPage";
import FormPage from "./pages/FormPage";
import LayoutPage from "./pages/LayoutPage";
import ModalPage from "./pages/ModalPage";
import SpinnerPage from "./pages/SpinnerPage";

const NavWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: ${props => props.theme.shadows[1]};
`;

const BodyWrapper = styled.div`
  margin-top: 32px;
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
      <NavWrapper>
        <Container px={4} py={3} bg={"WHITE"}>
          <Header />
        </Container>
      </NavWrapper>
      <BodyWrapper>
        <Container p={5} bg={"N1"}>
          <Flexbox>
            <Flexbox.Column width={1 / 4}>
              <Sidebar />
            </Flexbox.Column>
            <Flexbox.Column width={3 / 4}>
              <Suspense fallback={<div>Loading...</div>}>
                <Router>
                  <Intro path="/" />
                  <Start path="/start" />
                  <AvatarPage path="/avatar" />
                  <ButtonPage path="/button" />
                  <LayoutPage path="/layout" />
                  <ModalPage path="/modal" />
                  <FormPage path="/form" />
                  <SpinnerPage path="/spinner" />
                </Router>
              </Suspense>
            </Flexbox.Column>
          </Flexbox>
        </Container>
      </BodyWrapper>
    </Provider>
  );
}
export default App;
