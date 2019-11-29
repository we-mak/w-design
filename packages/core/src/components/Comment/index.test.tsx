import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "../..";
import Comment from "./index";

afterEach(cleanup);

describe("<Comment/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Comment
          avatarSize="xs"
          avatarUrl="https://source.unsplash.com/random"
          userName=""
          alt=""
          time=""
          message=""
          actions={[]}
          editEditor={<div>...</div>}
        ></Comment>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
