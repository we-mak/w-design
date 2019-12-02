import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Provider from "../Provider";
import Flexbox from "./index";

afterAll(cleanup);

describe("<Flex/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Flexbox>
          <Flexbox.Column />
        </Flexbox>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders gapless", () => {
    const { container } = render(
      <Provider>
        <Flexbox gapless />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Flexbox oneline />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
