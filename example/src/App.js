import React, { Suspense } from "react";
import { Router } from "@reach/router";
import { Provider, Container, Flexbox } from "w-design";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Intro from "./pages/Intro";
import Start from "./pages/Start";
import ButtonPage from "./pages/ButtonPage";
import FormPage from "./pages/FormPage";
import LayoutPage from "./pages/LayoutPage";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <Provider>
      <Container px={4} py={3} bg={"N2"}>
        <Header />
      </Container>
      <Container p={5}>
        <Flexbox>
          <Flexbox.Column width={1 / 4}>
            <Sidebar />
          </Flexbox.Column>
          <Flexbox.Column width={3 / 4}>
            <Suspense fallback={<div>Loading...</div>}>
              <Router>
                <Intro path="/" />
                <Start path="/start" />
                <LayoutPage path="/layout" />
                <ModalPage path="/modal" />
                <ButtonPage path="/button" />
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
