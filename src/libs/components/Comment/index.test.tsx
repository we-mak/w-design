import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Comment from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

const observeMock = {
  observe: () => null,
  unobserve: () => null
};

beforeEach(async () => {
  (window as any).IntersectionObserver = () => observeMock;
});

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
