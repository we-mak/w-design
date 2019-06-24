import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import "jest-styled-components";
import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./index";

import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Button/>", () => {
  it("should render with different appearance style", () => {
    const { container } = render(
      <Provider>
        <Card raised>
          <CardHeader title="Test title" description="Lorem ipsum">
            Header
          </CardHeader>

          <CardMedia
            imageUrl="https://dak95nwic4sny.cloudfront.net/73/cheetah-safari-41193237-1554105425-ImageGalleryLightboxLarge.jpg"
            alt="test"
          />
          <CardContent>
            A safari is an overland journey, usually a trip by tourists in Africa. In the past, the
            trip was often a big-game hunt, but today, safaris are often to observe
          </CardContent>

          <CardFooter>Footer</CardFooter>
        </Card>

        <Card isLoading />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
