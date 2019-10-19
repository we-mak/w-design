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
        <AnchorScroll destination="target-1">To target</AnchorScroll>
        <div id="target-1">Target 1</div>

        <AnchorScroll
          destination="target-2"
          duration={200}
          margin={5}
          top={5}
          callback={() => null}
        >
          To target
        </AnchorScroll>
        <div id="target-2">Target 2</div>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
