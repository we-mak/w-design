import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Picture from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

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
      <Provider>
        <Picture
          dataSrc="https://api.adorable.io/avatars/240/thunder"
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
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
