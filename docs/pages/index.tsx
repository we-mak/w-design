import * as React from "react";
import { Provider } from "@w-design/core";

const theme = {
  fonts: {
    normal: "'Montserrat', sans-serif",
    medium: "'Montserrat', sans-serif",
    demi: "'Montserrat', sans-serif",
    bold: "'Montserrat', sans-serif"
  }
};

const Index: React.FC = () => {
  return (
    <Provider theme={theme}>
      <h1>Hello Next.js 👋</h1>
    </Provider>
  );
};
export default Index;
