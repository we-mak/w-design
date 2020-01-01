import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import Provider from "../Provider";
import Collapse from ".";

afterEach(cleanup);

describe("collapse", () => {
  const { container } = render(
    <Provider>
      <Collapse title="Collapse component">
        Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law
        of Thermodynamics; i.e., it always increases.
      </Collapse>
    </Provider>
  );

  it("should render correctly", () => {
    expect(container).toMatchSnapshot();
  });
});
