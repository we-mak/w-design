import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Image from "./index";
import { ImageRatio } from "./ImageRatio";
import { Provider } from "../..";

afterEach(cleanup);

describe("<ImageRatio/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <ImageRatio>
          <Image data-src="https://source.unsplash.com/random?car" />
        </ImageRatio>
        <ImageRatio paddingBottom={100} objectFit="contain">
          <Image data-src="https://source.unsplash.com/random?car" />
        </ImageRatio>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
