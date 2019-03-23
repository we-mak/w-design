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
          <h3 style={{ margin: 0, padding: "0 .5rem" }}>W-design</h3>
        </a>
      </Section>
      <Section>Search will be here</Section>
      <Section>
        <a href="https://github.com/we-mak/w-design" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </Section>
    </Navbar>
  );
}
