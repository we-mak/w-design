import React, { Suspense } from "react";
import { Provider, Container, Navbar, Flexbox, Spinner, Typo } from "w-design";

const { Section } = Navbar;

function App() {
  return (
    <Provider>
      <Container p={4} bg={"B50"}>
        <Navbar>
          <Section>Logo</Section>
          <Section>Menu</Section>
        </Navbar>
      </Container>
      <Container>
        <Flexbox>
          <Flexbox.Column width={1 / 4}>
            Sidebar
            <Spinner />
          </Flexbox.Column>
          <Flexbox.Column width={3 / 4}>
            <Suspense fallback={<div>Loading...</div>}>
              <Typo appearance="h1" tag="div">
                Hello
              </Typo>
            </Suspense>
          </Flexbox.Column>
        </Flexbox>
      </Container>
    </Provider>
  );
}
export default App;
