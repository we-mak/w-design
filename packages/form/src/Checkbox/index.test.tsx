import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "@w-design/core";
import Checkbox from "./index";

afterEach(cleanup);

describe("<Checkbox/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Checkbox name="Checkbox" label="Test checkbox" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  // Props
  it("should checked by default", () => {
    const { getByTestId } = render(
      <Provider>
        <Checkbox defaultChecked />
      </Provider>
    );
    const checkbox = getByTestId("checkbox");
    expect((checkbox as HTMLInputElement).checked).toEqual(true);
  });

  // Event test
  it("should fire check event", () => {
    const { getByTestId } = render(
      <Provider>
        <Checkbox />
      </Provider>
    );
    const checkbox = getByTestId("checkbox");
    expect((checkbox as HTMLInputElement).checked).toEqual(false);
    fireEvent.click(checkbox);
    expect((checkbox as HTMLInputElement).checked).toEqual(true);
    fireEvent.click(checkbox);
    expect((checkbox as HTMLInputElement).checked).toEqual(false);
  });

  // Others
  it("shouldn't be changed if isDisabled", () => {
    const { getByTestId } = render(
      <Provider>
        <Checkbox isDisabled />
      </Provider>
    );
    const disabledCheckbox = getByTestId("checkbox");
    expect((disabledCheckbox as HTMLInputElement).checked).toEqual(false);
    fireEvent.click(disabledCheckbox);
    expect((disabledCheckbox as HTMLInputElement).checked).toEqual(false);
  });

  it('calls "onChange" prop on change', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <Checkbox onChange={onChange} />
      </Provider>
    );
    fireEvent.click(getByTestId("checkbox"));
    expect(onChange).toHaveBeenCalled();
  });
});
