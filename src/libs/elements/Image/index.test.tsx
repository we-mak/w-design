import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Image from "./index";
import Provider from "../../layout/Provider";

const observeMock = {
  observe: () => null,
  unobserve: () => null
};

beforeEach(async () => {
  (window as any).IntersectionObserver = () => observeMock;
});

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
