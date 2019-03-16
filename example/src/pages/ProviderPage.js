import React from "react";
import { Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";

const input = `

Theme provider is based on [styled-components](https://www.styled-components.com/) and making theme with [styled-system](http://jxnblk.com/styled-system/)

Provider provides theme for your layout, you can supply your theme by insert your theme object by \`theme\` props

#### Default theme

`;

const ProviderPage = () => {
  return (
    <div>
      <Typo appearance="h1">Provider</Typo>
      <ReactMarkdown source={input} />

      <Highlight language="javascript">
        {`
          defaultTheme = {
            breakpoint: ["24em", "32em", "48em", "64em", "80em"],
            fonts:
              '-apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif',
            fontSizes: [
              "0.7rem",
              "0.8rem",
              "0.9rem",
              "1rem",
              "1.2rem",
              "1.4rem",
              "1.6rem",
              "1.8rem",
              "2rem"
            ],
            fontWeights = { normal: 400, strong: 500, bold: 700, xbold: 900 },
            lineHeights = [1, 1.125, 1.25, 1.5],
            letterSpacings = { normal: "normal", caps: "0.25em" },
            radii = ["0rem", "0.1rem", "0.2rem", "0.3rem", "0.4rem"],
            space = [0, 4, 8, 16, 32, 64, 128], // space is used for margin and padding scales
            shadows = [
              "none",
              \`0 .2rem .5rem $\{hex2Rgba(colors.N50, 0.5)}\`,
              \`inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)\`
            ],
            colors: {...} // see colors
          };
        `}
      </Highlight>

      <p>Wrap your app with Provider</p>

      <Highlight language="javascript">{`
      <Provider>
        <h1>Default </h1>
        <p>
          Lorem ipsum
          <span>
            <a href="#">dolor </a>
          </span>
          sip amet
        </p>
      </Provider>
      `}</Highlight>

      <p>You can add custom them based on default theme</p>

      <Highlight language="javascript">
        {`
      <Provider
        theme={{
          fonts: "Roboto, Helvetica, sans-serif"
        }}
      >
        <h1>Roboto</h1>
        <p>
          Lorem ipsum
          <span>
            <a href="#">dolor </a>
          </span>
          sip amet
        </p>
      </Provider>
      `}
      </Highlight>
    </div>
  );
};

export default ProviderPage;
