import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import PushMessage from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<PushMessage/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <PushMessage messages={[{ value: "This is a message", appearance: "info" }]}></PushMessage>
        <PushMessage messages={[{ value: "This is a message", appearance: "warn" }]}></PushMessage>
        <PushMessage
          messages={[{ value: "This is a message", appearance: "success" }]}
        ></PushMessage>
        <PushMessage messages={[{ value: "This is a message", appearance: "error" }]}></PushMessage>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
