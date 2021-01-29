import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "@w-design/core";
import Toggle from "./index";

afterEach(cleanup);

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Toggle label="Toggle" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
