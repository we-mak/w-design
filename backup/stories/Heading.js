import React from "react";
import { storiesOf } from "@storybook/react";
import { Heading } from "../src/components";

storiesOf("Heading", module)
  .addWithJSX("Default Heading", () => (
    <React.Fragment>
      <Heading.H1> H1 Heading</Heading.H1>
      <Heading.H2> H2 Heading</Heading.H2>
      <Heading.H3> H3 Heading</Heading.H3>
      <Heading.H4> H4 Heading</Heading.H4>
      <Heading.H5> H5 Heading</Heading.H5>
      <Heading.H6>H6 Heading</Heading.H6>
    </React.Fragment>
  ))
  .addWithJSX("Custom component", () => (
    <Heading.H1 customComponent="span">H1 Heading as span tag</Heading.H1>
  ))
  .addWithJSX("Custom Fontweight", () => (
    <Heading.H1 fontWeight={600}> H1 font-weight 600 </Heading.H1>
  ))
  .addWithJSX("Custom color", () => (
    <Heading.H1 color="green"> H1 Heading</Heading.H1>
  ))
  .addWithJSX("Responsive heading", () => (
    <Heading.H1 fontSize={[2, 3, 4, 5]}> H1 Heading</Heading.H1>
  ));
