import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/styleUtils/theme";
import Root from "./Root";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeProps extends React.HTMLProps<HTMLDivElement> {
  theme?: {};
}

function Provider(p: ThemeProps) {
  const { theme = {}, ...props } = p;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Root {...props as any} />
      </ThemeProvider>
    </>
  );
}

Provider.displayName = "WProvider";

export default Provider;
