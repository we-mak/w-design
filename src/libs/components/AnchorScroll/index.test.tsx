import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import AnchorScroll from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<AnchorScroll/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <AnchorScroll destination="target">To target</AnchorScroll>

        <div id="target">
          <span role="img" aria-label="img" aria-labelledby="anchor target">
            💰
          </span>
          Target
        </div>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
