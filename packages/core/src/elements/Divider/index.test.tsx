import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Divider from "./index";
import Provider from "../../layout/Provider";

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
