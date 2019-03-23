import * as React from "react";
import { cleanup, render } from "react-testing-library";
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
          <Button appearance="primary">Hello</Button>
          <Button appearance="link">Hello</Button>
          <Button appearance="warning">Hello</Button>
          <Button appearance="success">Hello</Button>
          <Button appearance="danger">Hello</Button>
          <Button appearance="subtle">Hello</Button>
          <Button appearance="clean">Hello</Button>
          <Button appearance="help">Hello</Button>
        </ButtonGroup>
        <Button href="/" />
        <Button href="/" isDisabled />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // event

  // it('calls "onClick" prop on button click', () => {
  //   // Render new instance in every test to prevent leaking state
  //   const onClick = jest.fn();
  //   const { getByText } = render(<Button onClick={onClick} />);

  //   fireEvent.click(getByText(/click me nao/i));
  //   expect(onClick).toHaveBeenCalled();
  // });
});
