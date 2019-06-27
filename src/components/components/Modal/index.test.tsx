import * as React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import Modal from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Modal/>", () => {
  const spyScrollTo = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, "scrollTo", { value: spyScrollTo, writable: true });
    spyScrollTo.mockClear();
  });

  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <Modal
          onClose={() => null}
          modalTitle="Modal title"
          modalBody={<div>Modal body</div>}
          modalFooter={<div>Modal footer</div>}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should fire close event", () => {
    // Arrange
    const handleClose = jest.fn();

    const { getByText, getByTestId } = render(
      <Provider>
        <Modal
          onClose={handleClose}
          modalTitle="Modal title"
          modalBody={<div>Modal body</div>}
          modalFooter={<div>Modal footer</div>}
        />
      </Provider>
    );

    // Assert
    expect(getByText("Modal title")).toBeTruthy();
    // Act
    fireEvent.click(getByTestId(/close/i));
    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
