import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/theme";
import { ResetCss } from "./ResetCss";
import Root from "./Root";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  theme?: any;
}

class Provider extends React.Component<Props> {
  stylesheet: any;

  static displayName = "WProvider";

  public static defaultProps: Props = {
    theme: {}
  };

  componentDidMount() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.type = "text/css";
    // this.stylesheet.setAttribute("rel", "preload");
    // this.stylesheet.setAttribute("as", "style");
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
