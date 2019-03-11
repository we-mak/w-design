import * as React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Spinner from "./index";
import Provider from "../../layout/Provider";

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const container = renderer
      .create(
        <Provider>
          <Spinner />
        </Provider>
      )
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  it("should renders large sizecorrectly", () => {
    const container = renderer
      .create(
        <Provider>
          <Spinner large />
        </Provider>
      )
      .toJSON();
    expect(container).toMatchSnapshot();
  });

  // Style test
  it("should have large style spinner", () => {
    const container = renderer
      .create(
        <Provider>
          <Spinner large />
        </Provider>
      )
      .toJSON();

    expect(container).toHaveStyleRule("min-height", "2rem");
  });
});
