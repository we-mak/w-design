import * as React from "react";
import { cleanup, render } from "react-testing-library";
import "jest-styled-components";
import Modal from "./index";
import Provider from "../../layout/Provider";

describe("<Modal/>", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <Modal onClose={() => null} modalBody={<div />} modalFooter={<div />} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
