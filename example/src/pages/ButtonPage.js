import React from "react";
import { Typo, Button } from "w-design";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";

const p1 = `

## Props

| Props        | type                                               | default   | description

`;

const ButtonPage = () => {
  return (
    <>
      <Typo appearance="h1">Buttons</Typo>
      <Typo appearance="h4">Button Component</Typo>
      <ReactMarkdown source={p1} />

      <Button>Default button</Button>
    </>
  );
};

export default ButtonPage;
