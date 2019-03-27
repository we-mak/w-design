import React from "react";
import styled from "styled-components";
import { Navbar } from "w-design";
import logo from "../logom.png";

const LogoType = styled.h3`
  margin: 0 !important;
  padding: 0 0.5rem;
`;

const { Section } = Navbar;

export function Header() {
  return (
    <Navbar>
      <Section>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ width: "45px", height: "45px" }} alt="We-design logo" />
          <LogoType>W-design</LogoType>
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
