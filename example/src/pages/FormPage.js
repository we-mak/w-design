import React from "react";
import { Typo, InputField, InputForm } from "w-design";
import ReactMarkdown from "react-markdown";

const p1 = `

#### InputField Props

| Props        | type                                               | default   | description

`;

const FormPage = () => {
  return (
    <>
      <Typo appearance="h1">Form</Typo>
      <Typo appearance="h2">InputField</Typo>
      <p>A single input field component</p>
      <ReactMarkdown source={p1} />
      <InputField /> <InputField isFocus />
      <Typo appearance="h4">Input filed Size</Typo>
      <InputField size="sm" />
      <InputField size="lg" />
      <InputForm label="Label" hintMessage="Text hint" placeholder="Text..." isRequired />
    </>
  );
};

export default FormPage;
