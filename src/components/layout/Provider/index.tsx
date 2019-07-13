import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../../common/styleUtils/theme";
import { GlobalStyle } from "./GlobalStyle";

interface ThemeProps extends React.HTMLProps<HTMLDivElement> {
  theme?: {};
}

function Provider(p: ThemeProps) {
  const { theme = {}, children } = p;

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}

Provider.displayName = "WProvider";

export default Provider;
