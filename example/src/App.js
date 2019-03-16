import React, { Suspense, useState } from "react";
import { Provider, Container, Flexbox, Typo, Button, Modal } from "w-design";
import { Header } from "./components/Header";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Provider>
      <Container p={4} bg={"N2"}>
        <Header />
      </Container>
      <Container>
        <Flexbox>
          <Flexbox.Column width={1 / 4}>Sidebar</Flexbox.Column>
          <Flexbox.Column width={3 / 4}>
            <Suspense fallback={<div>Loading...</div>}>
              <Typo appearance="h1">H1</Typo>
              <Typo appearance="h1">H1</Typo>
              <Typo appearance="h2">H2</Typo>
              <Typo appearance="h3">H3</Typo>
              <Typo appearance="h4">H4</Typo>
              <Typo appearance="h5">H5</Typo>
              <Typo appearance="h6">H6</Typo>

              <Button onClick={() => setModalOpen(true)}>Default button</Button>
              {isModalOpen && (
                <Modal
                  rootID="root"
                  modalTitle="Some title"
                  modalBody={<div>Hello world</div>}
                  onClose={() => setModalOpen(false)}
                />
              )}
            </Suspense>
          </Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
}
export default App;
