import * as React from "react";
import { render } from "react-testing-library";
import Grid from "./index";

describe("<Grid/>", () => {
  // Render test
  it("should renders correctly", () => {
    const { container } = render(
      <Grid>
        <Grid.Column />
      </Grid>
    );
    expect(container).toMatchSnapshot();
  });
});
