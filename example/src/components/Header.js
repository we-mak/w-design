import React from "react";
import { Navbar } from "w-design";
// import logo from "../logom.png";

const { Section } = Navbar;

export function Header() {
  return (
    <Navbar>
      <Section>Logo</Section>
      <Section>Menu</Section>
      <Section />
    </Navbar>
  );
}
