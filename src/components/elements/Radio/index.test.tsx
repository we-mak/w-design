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
          groupName="Checkbox"
          groupLabel="Test checkbox"
          options={[
            {
              label: "Option 1",
              value: "foo"
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
  // it("should fire onchange event", () => {
  //   const onChange = jest.fn();
  //   const { getByTestId } = render(
  //     <Provider>
  //       <RadioGroup
  //         groupName="Checkbox"
  //         groupLabel="Test checkbox"
  //         options={[
  //           {
  //             label: "Option 1",
  //             value: "foo"
  //           },
  //           {
  //             label: "Option 2",
  //             value: "bar"
  //           }
  //         ]}
  //         onChange={onChange}
  //       />
  //     </Provider>
  //   );

  //   const radio: any = getByTestId(/radio/i);
  //   radio.value = "foo";
  //   fireEvent.change(radio, { target: { value: "foo" } });
  //   expect(onChange).toHaveBeenCalled();
  // });
});
