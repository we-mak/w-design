import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "@w-design/core";
import InputField from "./index";

afterEach(cleanup);

describe("<InputField/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <InputField placeholder="Default input" />
        <InputField size="lg" placeholder="Large input" />
        <InputField size="sm" placeholder="Small input" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  // Change event
  it("should update change", () => {
    const { getByLabelText } = render(
      <Provider>
        <InputField aria-label="test" />
      </Provider>
    );

    const input: any = getByLabelText("test");

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Lorem" } });
    expect(input.value).toBe("Lorem");
  });
});
