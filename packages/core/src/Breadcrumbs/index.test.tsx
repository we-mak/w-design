import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { BreadcrumbsItem } from "./BreadcrumbsItem";
import { Provider, Breadcrumbs } from "..";

afterEach(cleanup);

describe("<Breadcrumbs/>", () => {
  it("should render breadcrumbs correctly", () => {
    const { container } = render(
      <Provider>
        <Breadcrumbs>
          <BreadcrumbsItem>1</BreadcrumbsItem>
          <BreadcrumbsItem>2</BreadcrumbsItem>
          <BreadcrumbsItem isCurrentPage>Item 3</BreadcrumbsItem>
        </Breadcrumbs>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
