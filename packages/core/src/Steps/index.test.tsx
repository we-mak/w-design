import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import Provider from "../Provider";
import Steps from "./index";

afterEach(cleanup);

const steps: any = [
  {
    title: "Step 1",
    content: "This is step 1",
  },
  {
    title: "Step 2",
    content: "This is step 2",
  },
  {
    title: "Step 3",
    content: "This is step 3",
  },
];

describe("Steps component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider>
        <Steps steps={steps} activeIndex={0} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should active right content at right step", () => {
    const { getByTestId } = render(
      <Provider>
        <Steps steps={steps} activeIndex={1} />
      </Provider>
    );

    expect(getByTestId("step-content").textContent).toBe("This is step 2");
  });
});
