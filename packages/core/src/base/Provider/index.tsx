import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../common/theme";
import { GlobalStyle } from "./GlobalStyle";
import "./normalize.css";

interface ThemeProps extends React.HTMLProps<HTMLDivElement> {
  theme?: object | ((theme: object) => object);
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
