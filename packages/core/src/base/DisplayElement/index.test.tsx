import * as React from "react";
import { render } from "@testing-library/react";
import DisplayElement from "./index";
import { Provider } from "../../";

describe("<DisplayElement/>", () => {
  // Column Style test
  it("should has display none with xs", () => {
    const { container } = render(
      <Provider>
        <DisplayElement display={["block"]} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // it("should has display none with sm", () => {
  //   const wrapper = renderer.create(<DisplayElement sm />).toJSON();
  //   expect(wrapper).toHaveStyleRule("display", "none", {
  //     media: "screen and (min-width: 24em) and (max-width: 32em)"
  //   });
  // });
});
