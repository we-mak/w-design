import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import SectionMessage from "./index";
import { Provider } from "../..";

afterEach(cleanup);

describe("<SectionMessage/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <SectionMessage title="Info">
          The quick brown fox jumps over the lazy dog
        </SectionMessage>
        <SectionMessage appearance="confirm" title="Confirm">
          The quick brown fox jumps over the lazy dog
        </SectionMessage>
        <SectionMessage title="Warn" appearance="warn">
          The quick brown fox jumps over the lazy dog
        </SectionMessage>
        <SectionMessage title="Error" appearance="error">
          The quick brown fox jumps over the lazy dog
        </SectionMessage>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
