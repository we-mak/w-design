import * as React from "react";
import { render } from "@testing-library/react";
import { Provider, Divider } from "../..";

describe("<Divider/>", () => {
  it("should render correct with divider style", () => {
    const { container } = render(
      <Provider>
        <Divider />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
