import * as React from "react";
import styled from "styled-components";
import { Navbar, DisplayElement } from "@w-design/core";

const LogoType = styled.h3`
  margin: 0 !important;
  padding: 0 0.5rem;
  @media (max-width: 840px) {
    display: none;
  }
`;

const { Section } = Navbar;

export const Header = () => {
  return (
    <Navbar>
      <Section>
        <DisplayElement display={["block", "block", "block", "none"]}>
          Mobile
        </DisplayElement>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logom.png"
            style={{ width: "45px", height: "45px" }}
            alt="We-design logo"
          />
          <LogoType>W-design</LogoType>
        </a>
      </Section>

      <Section style={{ display: "inline-block" }}>Search</Section>
      <Section>
        <a
          href="https://github.com/we-mak/w-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </Section>
    </Navbar>
  );
};
