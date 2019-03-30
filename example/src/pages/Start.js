import React from "react";
import { Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const input1 = `
### Prerequisite: Provider component

To keep thing simple with theme, the library depends on **Provider**, you must use \`Provider\` on the top of the App.

`;

const input2 = `

Theme provider is based on [styled-components](https://www.styled-components.com/) and making theme with [styled-system](http://jxnblk.com/styled-system/)

Provider provides theme for your layout, you can supply your theme by insert your theme object by \`theme\` props

#### Default theme

`;

const Start = () => {
  return (
    <div>
      <Typo appearance="h1"> Getting start</Typo>
      <ReactMarkdown
        source={`### Install

      `}
      />
      <CodeBlock language="lang-sh">
        npm install --save w-design styled-components
        {"\n"}# or{"\n"}
        yarn add w-design
      </CodeBlock>

      <ReactMarkdown source={input1} />
      <CodeBlock language="lang-js">
        {`
      import { Provider, Container } from "w-design";

      ReactDOM.render(
        <Provider>
          <Container> Lorem ipsum </Container>
        </Provider>,mountNode);
        `}
      </CodeBlock>
      <ReactMarkdown source={input2} />
      <CodeBlock language="lang-javascript">
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
              \`inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)\`,
              \`0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)\`,
              \`0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)\`,
              \`0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)\`,
              \`0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)\`,
              \`0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)\`,
              \`0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)\`
            ],
            // Default theme color schema
            colors: {
              NONE: "transparent",
              // Black
              BLACK: "#000",
              // White
              WHITE: "#FFF",

              // Neutral
              N90: "#10161A",
              N80: "#182026",
              N70: "#202B33",
              N60: "#293742",
              N50: "#394B59",
              N40: "#4D6171",
              N30: "#566E82",
              N20: "#60798E",
              N10: "#6C869B",
              N9: "#768FA4",
              N8: "#87A0B5",
              N7: "#90A9BF",
              N6: "#9DB3C6",
              N5: "#BECEDC",
              N4: "#CED9E3",
              N3: "#E2EAF2",
              N2: "#EFF3F6",
              N1: "#FBFBFB",
              // Neutral Hex

              // Primary
              B70: "#004660",
              B60: "#007099",
              B50: "#008CC0", // Primary Color
              B40: "#009AD3",
              B30: "#00A7E4",
              B20: "#00B7FA",
              B10: "#3ECBFF",
              B7: "#7CDCFF",
              B5: "#B1EAFF",

              // Red
              R50: "#B40404",
              R40: "#C61515",
              R30: "#DC1F1F",
              R20: "#F22828",
              R10: "#FF5252",
              R7: "#FF8383",
              R5: "#FFADAD",

              // Orange
              O50: "#E15B00",
              O40: "#EF8100",
              O30: "#FA9B00",
              O20: "#FFAC23",
              O10: "#FFC40D",
              O7: "#FFDA49",
              O5: "#FFEA81",

              // Green
              G50: "#1D7324",
              G40: "#238C2C",
              G30: "#29A634",
              G20: "#3BBC45",
              G10: "#4DD257",
              G7: "#55E560",
              G5: "#74FD7F",

              // Purple
              P50: "#403294",
              P40: "#5243AA",
              P30: "#6554C0",
              P20: "#8777D9",
              P10: "#998DD9",
              P7: "#C0B6F2",
              P5: "#EAE6FF",

              // Teal
              T50: "#008DA6",
              T40: "#00A3BF",
              T30: "#00B8D9",
              T20: "#00C7E6",
              T10: "#79E2F2",
              T7: "#B3F5FF",
              T5: "#E6FCFF"
            }
          };
        `}
      </CodeBlock>
      <p>Wrap your app with Provider</p>
      <CodeBlock language="language-js">{`
      <Provider>
        <App/>
      </Provider>
      `}</CodeBlock>
      <Typo appearance="h4">Custom theme</Typo>
      <p>You can add custom them based on default theme</p>
      <CodeBlock language="language-js">
        {`
      <Provider
        theme={{
          fonts: "Roboto, Helvetica, sans-serif"
        }}
      >
        <App/>
      </Provider>
      `}
      </CodeBlock>
      <Typo appearance="h4">Extends with theme properties</Typo>
      <p>You even can use you own theme with other component which is passed styled-system Api.</p>
      <p>For example:</p>
      <CodeBlock language="language-js">{`<Container bg="N2">...</Container>`}</CodeBlock>
    </div>
  );
};

export default Start;
