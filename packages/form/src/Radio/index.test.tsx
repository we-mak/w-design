import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "@w-design/core";
import RadioGroup from "./index";

afterEach(cleanup);

const options = [
  {
    label: "Option 1",
    value: "foo",
    name: "option 1",
    isChecked: true
  },
  {
    label: "Option 2",
    value: "bar",
    isDisabled: true
  }
];

describe("<Radio/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <RadioGroup
          isRequired
          groupName="Radio"
          groupLabel="Radio"
          options={options}
        />
        <RadioGroup isDisabled defaultValue="foo" options={options} />
        <RadioGroup value="test" />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  // Event
  it("should fire onchange event", () => {
    const { getByLabelText } = render(
      <Provider>
        <RadioGroup
          groupName="Radio"
          groupLabel="Radio"
          options={[
            {
              label: "Foo",
              value: "foo"
            },
            {
              label: "Bar",
              value: "bar"
            }
          ]}
        />
      </Provider>
    );

    const radio: any = getByLabelText(/Foo/i);
    fireEvent.change(radio, { target: { value: "bar" } });

    expect(radio.value).toBe("bar");
  });

  it("should fire onRadioChange event", () => {
    const { getByLabelText } = render(
      <Provider>
        <RadioGroup
          groupName="Radio"
          groupLabel="Group"
          options={[
            {
              label: "Foo",
              value: "foo"
            },
            {
              label: "Bar",
              value: "bar"
            }
          ]}
        />
      </Provider>
    );

    fireEvent.click(getByLabelText(/Foo/i));
    expect((getByLabelText(/Foo/i) as any).checked).toBe(true);
  });

  it("should call onChange when it is a function", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Provider>
        <RadioGroup
          groupName="Radio"
          groupLabel="Group"
          options={[
            {
              label: "Foo",
              value: "foo"
            },
            {
              label: "Bar",
              value: "bar"
            }
          ]}
          onChange={onChange}
        />
      </Provider>
    );

    fireEvent.click(getByLabelText(/Foo/i));

    expect(onChange).toHaveBeenCalled();
  });
});
