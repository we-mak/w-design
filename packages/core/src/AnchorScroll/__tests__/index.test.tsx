import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Provider from "../../Provider";
import AnchorScroll from "../index";

afterEach(cleanup);

describe("AnchorScroll", () => {
  const { container } = render(
    <Provider>
      <AnchorScroll destination="target">anchor</AnchorScroll>
      <div id="target">Target</div>
    </Provider>
  );

  // Render test
  it("should renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  it("should throw error when missing target", () => {
    expect(() =>
      render(
        <Provider>
          <AnchorScroll destination="">anchor</AnchorScroll>
        </Provider>
      )
    ).toThrow('Anchor destination: "" not found');
  });

  // this test must checks 2 cases before callback is executed
  // `window.pageYOffset === scrollTarget`
  // `"requestAnimationFrame" in window === false`

  // it("should fire callback function", () => {
  //   const callback = jest.fn();
  //   const { getByText } = render(
  //     <Provider>
  //       <AnchorScroll destination="target" callback={callback}>
  //         anchor
  //       </AnchorScroll>
  //       <div id="target">Target</div>
  //     </Provider>
  //   );

  //   fireEvent.click(getByText("anchor"));
  //   expect(callback).toHaveBeenCalled();
  // });
});
