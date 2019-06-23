import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Avatar from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Avatar alt="test" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
