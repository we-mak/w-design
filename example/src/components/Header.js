import React from "react";
import { Navbar } from "w-design";
import logo from "../logom.png";
const { Section } = Navbar;

export function Header() {
  return (
    <Navbar>
      <Section>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ width: "45px", height: "45px" }} alt="We-design logo" />
        </a>
      </Section>
      <Section>Search</Section>
      <Section>
        <a href="https://github.com/we-mak/w-design">Github</a>
      </Section>
    </Navbar>
  );
}
