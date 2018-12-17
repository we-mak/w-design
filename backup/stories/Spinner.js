import React from "react";
import { storiesOf } from "@storybook/react";
import { Spinner } from "../src/components";

storiesOf("Spinner", module)
  .addWithJSX("Default Spinner", () => <Spinner />)
  .addWithJSX("Colored Spinner", () => <Spinner borderColor="blue" />)
  .addWithJSX("Large Spinner", () => <Spinner largeSpinner />)