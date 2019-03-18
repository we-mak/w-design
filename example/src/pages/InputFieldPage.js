import React from "react";
import { Typo, InputField } from "w-design";
import ReactMarkdown from "react-markdown";

const p1 = `

## Props

| Props        | type                                               | default   | description

`;

const InputFieldPage = () => {
  return (
    <>
      <Typo appearance="h1">InputField</Typo>
      <Typo appearance="h4">A single input field</Typo>
      <ReactMarkdown source={p1} />
      <InputField /> <InputField isFocus />
      <InputField size="sm" />
      <InputField size="lg" />
    </>
  );
};

export default InputFieldPage;
