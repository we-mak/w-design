import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { useClickOutside } from "../";

afterEach(cleanup);

const Test = () => {
  const ref = useClickOutside(() => null);

  return (
    <div>
      <div ref={ref}>foo</div>
    </div>
  );
};

describe("useClickOutside", () => {
  test("should return true when click on parent", () => {
    const { container } = render(<Test />);
    fireEvent.click(container);
  });
});
