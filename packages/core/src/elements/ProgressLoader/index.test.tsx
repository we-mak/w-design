import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import ProgressLoader from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<ProgressLoader/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <ProgressLoader percent={0} />
        <ProgressLoader percent={40} status="success" />
        <ProgressLoader percent={70} status="error" />
        <ProgressLoader percent={100} />
        <ProgressLoader percent={100} showInfo={false} />
        <ProgressLoader percent={60} size="sm" />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
