import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Provider from "../Provider";
import PushMessage from "./index";

afterEach(cleanup);

describe("<PushMessage/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <PushMessage
          message={{ value: "This is a message", appearance: "info" }}
        ></PushMessage>
        <PushMessage
          message={{ value: "This is a message", appearance: "warn" }}
        ></PushMessage>
        <PushMessage
          message={{ value: "This is a message", appearance: "success" }}
        ></PushMessage>
        <PushMessage
          message={{ value: "This is a message", appearance: "error" }}
        ></PushMessage>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
