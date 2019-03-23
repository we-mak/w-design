import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/styleUtils/theme";
import { ResetCSS } from "./resetCSS";
import Root from "./Root";

interface ThemeProps extends React.HTMLProps<HTMLDivElement> {
  theme?: {};
}

function Provider(p: ThemeProps) {
  const { theme = {}, ...props } = p;

  // React.useEffect(() => {
  //   let stylesheet: HTMLStyleElement | null = document.createElement("style");
  //   stylesheet.type = "text/css";
  //   stylesheet.innerHTML = resetCSS;

  //   if (document && document.head) {
  //     document.head.appendChild(stylesheet);
  //   }

  //   return function() {
  //     if (stylesheet && document && document.head) {
  //       document.head.removeChild(stylesheet);
  //       stylesheet = null;
  //     }
  //   };
  // });

  return (
    <>
      <ResetCSS />
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Root {...props as any} />
      </ThemeProvider>
    </>
  );
}

Provider.displayName = "WProvider";

export default Provider;
