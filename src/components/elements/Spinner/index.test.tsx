import * as React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import Spinner from "./index";
import Provider from "../../layout/Provider";

describe("<Spinner/>", () => {
  // Render test
  it("should renders correctly", () => {
    const wrapper = render(
      <Provider>
        <Spinner>Test</Spinner>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Style test
  // it("should normal style spinner", () => {
  //   const wrapper = render(
  //     <Provider>
  //       <Spinner>Test</Spinner>
  //     </Provider>
  //   );
  //   expect(wrapper).toHaveStyleRule("min-height", ".8rem");
  // });

  // it("should have large style spinner", () => {
  //   const wrapperLg = render(
  //     <Provider>
  //       <Spinner large>Test</Spinner>
  //     </Provider>
  //   );
  //   expect(wrapperLg).toHaveStyleRule("min-height", "2rem");
  // });
});
