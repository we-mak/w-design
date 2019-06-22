import * as React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import AvatarGroup from "./index";
import Provider from "../../layout/Provider";

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const container = render(
      <Provider>
        <AvatarGroup />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
