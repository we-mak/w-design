import * as React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Icon from './index'
import Provider from "../../layout/Provider";


describe('<Icon/>', () => {
  it("should render correct icon styled", () => {
    const { container } = render(
      <Provider>
        <Icon className="fas fa-clock"/>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
})