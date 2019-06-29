import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import InputField from "./index";
import Provider from "../../layout/Provider";

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
