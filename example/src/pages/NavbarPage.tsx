import * as React from "react";
import { Typo, Navbar } from "w-design";

const Example = () => (
  <Navbar>
    <Navbar.Section> Section start</Navbar.Section>
    <Navbar.Center> Center Section 1</Navbar.Center>
    <Navbar.Section display={["none", "none", "flex"]}> Hide mobile</Navbar.Section>
    <Navbar.Section> Section end</Navbar.Section>
  </Navbar>
);

const NavbarPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Navbar</Typo>
    Navigation bar for header or footer
    <div style={{ margin: ".5rem" }}>
      <Example />
    </div>
  </>
);

export default NavbarPage;
