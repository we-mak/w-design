import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Image from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Image/>", () => {
  it("should render correct image", () => {
    const { container } = render(
      <Provider>
        <Image data-src="https://api.adorable.io/avatars/240/thunder" />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
