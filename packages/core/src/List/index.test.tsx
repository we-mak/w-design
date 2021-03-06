import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Provider from "../Provider";
import List, { ListItem, ListFooter } from "./index";

afterEach(cleanup);

const listData = [
  {
    title: "Test",
    description:
      "W-design is give you an option to provide solution to make great UI for you web application",
    thumbnail: "https://source.unsplash.com/random"
  },
  {
    title: "Test",
    description:
      "W-design is give you an option to provide solution to make great UI for you web application",
    thumbnail: "https://source.unsplash.com/random"
  }
];

describe("<List/>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <List
          header="List header"
          sourceData={listData}
          rows={(item: any) => {
            return (
              <ListItem
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                actions={[]}
                hasDivider
              >
                this is the child content
              </ListItem>
            );
          }}
          footer={<ListFooter>List Footer</ListFooter>}
        ></List>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
