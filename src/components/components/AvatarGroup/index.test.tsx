import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import AvatarGroup from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const container = render(
      <Provider>
        <AvatarGroup
          name="we-design"
          description="this is the description"
          actions={<div>do action</div>}
        />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
