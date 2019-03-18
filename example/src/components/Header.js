import React from "react";
import { Navbar } from "w-design";
// import logo from "../logom.png";

const { Section } = Navbar;

export function Header() {
  return (
    <Navbar>
      <Section>Logo</Section>
      <Section>Search</Section>
      <Section>
        <a href="https://github.com/we-mak/w-design">Github</a>
      </Section>
    </Navbar>
  );
}
