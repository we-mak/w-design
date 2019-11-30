import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "@w-design/core";
import InputField from "./index";

afterEach(cleanup);

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <InputField placeholder="Default input" />
        <InputField size="lg" placeholder="Large input" />
        <InputField size="sm" placeholder="Small input" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
