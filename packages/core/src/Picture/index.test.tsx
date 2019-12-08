import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Provider from "../Provider";
import Picture from "./index";

afterEach(cleanup);

describe("<Picture/>", () => {
  it("should render correct icon styled", () => {
    const { container } = render(
      <Provider>
        <Picture
          dataSrc="https://api.adorable.io/avatars/240/thunder"
          srcSets={[
            {
              media: "480",
              src:
                "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480441.jpg"
            },
            {
              media: "680",
              src:
                "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480425.jpg"
            }
          ]}
        />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
