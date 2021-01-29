import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Provider from "../Provider";
import Chip from "./index";

afterEach(cleanup);

describe("Chip component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <Chip avatar="https://i.pravatar.cc/100">Test</Chip>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // event
  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Provider>
        <Chip onDismiss={onClick}>Test</Chip>
      </Provider>
    );

    fireEvent.click(getByRole(/button/i));

    expect(onClick).toHaveBeenCalled();
  });
});
