import * as React from "react";
import { ThemeProvider } from "../../../utils/styled";
import defaultTheme from "../../../common/theme";
import Root from "./Root";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  theme?: any;
}

class Provider extends React.PureComponent<Props, void> {
  static displayName = "W.Provider";

  public static defaultProps: Props = {
    theme: {}
  };

  render() {
    const { theme, ...props } = this.props;

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Root {...props as any} />
      </ThemeProvider>
    );
  }
}

export default Provider;
