import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/theme";
import { resetCSS } from "./resetCSS";
import Root from "./Root";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  theme?: {};
}

function Provider(p: Props) {
  const { theme = {}, ...props } = p;

  React.useEffect(() => {
    const stylesheet: any = document.createElement("style");
    stylesheet.type = "text/css";
    stylesheet.innerHTML = resetCSS;

    if (document && document.head) {
      document.head.appendChild(stylesheet);
    }

    return function() {
      if (stylesheet && document && document.head) {
        document.head.removeChild(stylesheet);
      }
    };
  });

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <Root {...props as any} />
    </ThemeProvider>
  );
}

Provider.displayName = "WProvider";

export default Provider;
