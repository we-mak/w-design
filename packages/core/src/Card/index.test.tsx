import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import Provider from "../Provider";
import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./index";

afterEach(cleanup);

describe("<Card/>", () => {
  it("should render with full card style", () => {
    const { container } = render(
      <Provider>
        <Card raised>
          <CardHeader title="Test title" description="Lorem ipsum">
            Header
          </CardHeader>

          <CardMedia
            imageUrl="https://photo.foodgawker.com/wp-content/uploads/2019/04/3425217.jpg"
            srcSets={[
              {
                media: "480",
                src:
                  "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480441.jpg",
              },
              {
                media: "680",
                src:
                  "https://photo2.foodgawker.com/wp-content/uploads/2019/08/3480425.jpg",
              },
            ]}
            alt=""
          />
          <CardContent>
            A safari is an overland journey, usually a trip by tourists in
            Africa. In the past, the trip was often a big-game hunt, but today,
            safaris are often to observe
          </CardContent>

          <CardFooter>Footer</CardFooter>
        </Card>

        <Card isLoading />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
