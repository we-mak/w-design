import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Drawer from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Drawer/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Drawer isOpen onClose={() => {}}></Drawer>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
