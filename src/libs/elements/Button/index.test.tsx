import * as React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import Button, { ButtonGroup } from "./index";
import Provider from "../../layout/Provider";

afterEach(cleanup);

describe("<Button/>", () => {
  it("should render with different appearance style", () => {
    const { container } = render(
      <Provider>
        <ButtonGroup>
          <Button>Hello</Button>
          <Button iconBefore="fas fa-phone" appearance="primary">
            Hello
          </Button>
          <Button iconAfter="fas fa-phone" appearance="link">
            Hello
          </Button>
          <Button iconBefore="fas fa-phone" iconOnly appearance="warning" />
          <Button appearance="success">Hello</Button>
          <Button appearance="danger">Hello</Button>
          <Button appearance="subtle">Hello</Button>
          <Button appearance="clean">Hello</Button>
          <Button autoFocus appearance="help">
            Hello
          </Button>
        </ButtonGroup>
        <Button href="/" />
        <Button href="/" isDisabled />
        <Button isSelected />
        <Button isLoading />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // props test

  // event
  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByText } = render(
      <Provider>
        <Button onClick={onClick}>Button</Button>
      </Provider>
    );
    fireEvent.click(getByText(/Button/i));
    expect(onClick).toHaveBeenCalled();
  });
});
