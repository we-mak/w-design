import * as React from "react";
import { ThemeProvider } from "../../../utils/styled";
import defaultTheme from "../../../common/theme";
import Root from "./Root";
import ResetCss from "./resetCss";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  theme?: any;
}

class Provider extends React.PureComponent<Props> {
  stylesheet: any;

  static displayName = "W.Provider";

  public static defaultProps: Props = {
    theme: {}
  };

  componentDidMount() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.type = "text/css";
    this.stylesheet.innerHTML = ResetCss;
    if (document && document.head) {
      document.head.appendChild(this.stylesheet);
    }
  }

  componentWillUnmount() {
    if (this.stylesheet && document && document.head) {
      document.head.removeChild(this.stylesheet);
      delete this.stylesheet;
    }
  }

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
