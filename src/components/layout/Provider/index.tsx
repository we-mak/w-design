import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/theme";
import { resetCSS } from "./resetCSS";
import Root from "./Root";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  theme?: {};
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
    this.stylesheet.innerHTML = resetCSS;

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

// function Provider(p: Props) {
//   const { theme = {}, ...props } = p;

//   let stylesheet: any;
//   React.useEffect(() => {
//     stylesheet = document.createElement("style");
//     stylesheet.type = "text/css";
//     stylesheet.innerHTML = resetCSS;

//     if (document && document.head) {
//       document.head.appendChild(stylesheet);
//     }

//     return function() {
//       stylesheet &&
//         document &&
//         document.head &&
//         document.head.removeChild(stylesheet);
//     };
//   });

//   return (
//     <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
//       <Root {...props as any} />
//     </ThemeProvider>
//   );
// }

export default Provider;
