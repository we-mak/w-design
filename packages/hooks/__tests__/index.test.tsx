import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { useClickOutside } from "../src";

afterEach(cleanup);

const fn = jest.fn();

describe("useClickOutside", () => {
  const Test = () => {
    const ref = useClickOutside(fn);

    return (
      <div data-testid="outside">
        <div ref={ref}>foo</div>
      </div>
    );
  };

  test("should not call function when click on element", () => {
    const { container } = render(<Test />);

    fireEvent.click(container);
    expect(fn).not.toBeCalled();
  });

  // test("should call function when click outside element", () => {
  //   const { getByTestId } = render(<Test />);
  //   fireEvent.click(getByTestId(/outside/i));
  //   expect(fn).toBeCalled();
  // });
});
