import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { useClickOutside } from "../src";

afterEach(cleanup);

const fn = jest.fn();

describe("useClickOutside", () => {
  const Test = () => {
    const ref = useClickOutside(fn);

    return (
      <div>
        outside
        <div ref={ref}>foo</div>
      </div>
    );
  };

  test("should not call function when click on element", () => {
    const { getByText } = render(<Test />);
    fireEvent.click(getByText("foo"));
    expect(fn).not.toBeCalled();
  });

  // test("should call function when click outside element", () => {
  //   const { getByText } = render(<Test />);
  //   fireEvent.click(getByText("outside"));
  //   expect(fn).toBeCalled();
  // });
});
