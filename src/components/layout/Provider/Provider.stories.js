import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";

storiesOf("components/Provider", module).addWithJSX("default Provider", () => (
  <Provider>
    <h1>Default </h1>
    <p>
      Lorem ipsum
      <span>
        <a href="#"> dolor </a>
      </span>{" "}
      sip amet
    </p>
  </Provider>
));
