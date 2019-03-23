import * as React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import FormGroup from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Modal>", () => {
  it("should render correct modal", () => {
    const { container } = render(
      <Provider>
        <FormGroup />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
