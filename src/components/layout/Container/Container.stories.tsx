import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Container from ".";

const stories = storiesOf("Container", module);

stories.add("Container", withInfo({ inline: true })(() => <Container />));
