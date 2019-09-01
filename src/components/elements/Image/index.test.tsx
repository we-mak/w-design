import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Image from "./index";

const observeMock = {
  observe: () => null,
  unobserve: () => null
};

beforeEach(async () => {
  (window as any).IntersectionObserver = () => observeMock;
});

describe("<Image/>", () => {
  it("should render correct icon styled", () => {
    const { container } = render(<Image src="https://api.adorable.io/avatars/240/thunder" />);
    expect(container).toMatchSnapshot();
  });
});
