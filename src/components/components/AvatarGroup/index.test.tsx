import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import AvatarGroup from "./index";
import Avatar from "../../elements/Avatar";
import Provider from "../../layout/Provider";

afterEach(cleanup);

const observeMock = {
  observe: () => null,
  unobserve: () => null
};

beforeEach(async () => {
  (window as any).IntersectionObserver = () => observeMock;
});

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const container = render(
      <Provider>
        <AvatarGroup
          avatar={<Avatar avatarUrl="https://api.adorable.io/avatars/80/vn" />}
          name="we-design"
          description="this is the description"
          actions={<div>do action</div>}
        />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
