import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Avatar from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<AvatarGroup/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Provider>
        <Avatar
          size="md"
          alt="test"
          presence="online"
          avatarUrl="https://api.adorable.io/avatars/240/thunder"
        />
        <Avatar size="xs" presence="offline" />
        <Avatar size="sm" presence="busy" />
        <Avatar size="lg" />
        <Avatar size="xl" />
        <Avatar size="xxl" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});