import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import RadioGroup from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Radio/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <RadioGroup
          groupName="Radio"
          groupLabel="Radio"
          options={[
            {
              label: "Option 1",
              value: "foo",
              isChecked: true
            },
            {
              label: "Option 2",
              value: "bar"
            }
          ]}
        />
        <RadioGroup
          isDisabled
          defaultValue="foo"
          groupName="Radio"
          groupLabel="Radio"
          options={[
            {
              label: "Option 1",
              value: "foo",
              isChecked: true
            },
            {
              label: "Option 2",
              value: "bar"
            }
          ]}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
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

  // it("should fire onRadioChange event", () => {
  //   const onChange = jest.fn();
  //   const { getByLabelText } = render(
  //     <Provider>
  //       <RadioGroup
  //         groupName="Radio"
  //         groupLabel="Group"
  //         options={[
  //           {
  //             label: "Foo",
  //             value: "foo"
  //           },
  //           {
  //             label: "Bar",
  //             value: "bar"
  //           }
  //         ]}
  //         onRadioChange={onChange}
  //       />
  //     </Provider>
  //   );

  //   const radio: any = getByLabelText(/Radio/i);
  //   fireEvent.click(radio);
  //   expect(onChange).toHaveBeenCalled();
  // });
});
