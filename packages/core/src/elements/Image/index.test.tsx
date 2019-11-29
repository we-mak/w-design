import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider, Image } from "../..";

afterEach(cleanup);

describe("<Image/>", () => {
  const props = {
    "data-src": "https://api.adorable.io/avatars/240/thunder",
    alt: "Test"
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
