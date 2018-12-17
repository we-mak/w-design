import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "../src/components";

storiesOf("Provider", module)
  .addWithJSX("Default Provider", () => (
    <Provider>
      <h1>Default Provider</h1>
      <p>
        Lorem ipsum
        <span>
          <a href="#"> dolor </a>
        </span>
        sip amet
      </p>
    </Provider>
  ))
  .addWithJSX("Custom Provider", () => (
    <Provider
      theme={{
        fonts: "Roboto, Helvetica, sans-serif"
      }}
    >
      <h1>Roboto font theme</h1>
      <p>Lorem ipsum sip amet</p>
    </Provider>
  ));
