import React, { Suspense } from "react";
import { Router } from "@reach/router";
import { Provider, Container, Flexbox } from "w-design";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Intro from "./pages/Intro";
import ProviderPage from "./pages/ProviderPage";
import ButtonPage from "./pages/ButtonPage";
import InputFieldPage from "./pages/InputFieldPage";
import ContainerPage from "./pages/ContainerPage";

function App() {
  return (
    <Provider>
      <Container p={4} bg={"N2"}>
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
                <ProviderPage path="/provider" />
                <ContainerPage path="/container" />
                <ButtonPage path="/button" />
                <InputFieldPage path="/input-field" />
              </Router>
            </Suspense>
          </Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
}
export default App;
