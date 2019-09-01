import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Picture from "./index";

const observeMock = {
  observe: () => null,
  unobserve: () => null
};

beforeEach(async () => {
  (window as any).IntersectionObserver = () => observeMock;
});

describe("<Picture/>", () => {
  it("should render correct icon styled", () => {
    const { container } = render(
      <Picture
        data-src="https://api.adorable.io/avatars/240/thunder"
        srcSets={[
          {
            media: "480",
            src: "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480441.jpg"
          },
          {
            media: "680",
            src: "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480425.jpg"
          }
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
