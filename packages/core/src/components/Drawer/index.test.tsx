import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "../..";
import Drawer from "./index";

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
