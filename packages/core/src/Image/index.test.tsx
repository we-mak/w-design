import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider, Image } from "..";

afterEach(cleanup);

describe("<Image/>", () => {
  const props = {
    "data-src": "https://source.unsplash.com/random",
    alt: "Test",
    width: "300",
    height: "400",
  };

  it("should render correct image", () => {
    const { container } = render(
      <Provider>
        <Image {...props} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // describe('when the Image is out of view', ()=> {
  //   beforeAll(() => {
  //     const mockEntry = { isIntersecting: false }

  //   })
  // })
});
