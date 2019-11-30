import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "@w-design/core";
import Masonry from "./index";

afterEach(cleanup);

const FILE_URL = "https://source.unsplash.com/random?";

const images = [
  {
    id: "1-ad",
    coverId: "car"
  },
  {
    id: "2-3434",
    coverId: "building"
  },
  {
    id: "3-343dfa",
    coverId: "motobike"
  },
  {
    id: "4-xva",
    coverId: "children"
  },
  {
    id: "5-xvcva",
    coverId: "car"
  },
  {
    id: "6-aq",
    coverId: "work"
  }
];

const props = {
  breakpoints: [320, 480, 768, 920, 1200],
  defaultCols: 4
};

describe("<Masonry/>", () => {
  it("should render correct with masonry style", () => {
    const { container } = render(
      <Provider>
        <Masonry {...props}>
          {images.map(img => {
            return <img src={`${FILE_URL}/${img.coverId}`} key={img.id} />;
          })}
        </Masonry>
        <Masonry breakpoints={[320, 480, 768, 920]}>
          {images.map(img => {
            return <img src={`${FILE_URL}/${img.coverId}`} key={img.id} />;
          })}
        </Masonry>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  // it("should have 4 default column", () => {

  // })
});
