import * as React from "react";
import styled from "../../../utils/styled";

const breakpoints = {
  xs: "@media screen and (max-width: 24em)",
  sm: "@media screen and (min-width: 24em) and (max-width: 32em)",
  md: "@media screen and (min-width: 32em) and (max-width: 48em)",
  lg: "@media screen and (min-width: 48em) and (max-width: 64em)",
  xl: "@media screen and (min-width: 64em) and (max-width: 80em)",
  xxl: "@media screen and (min-width: 80em)"
};

const hidden = (key: string) => (props: string) =>
  props[key]
    ? {
        [breakpoints[key]]: {
          display: "none"
        }
      }
    : null;

const xs = hidden("xs");
const sm = hidden("sm");
const md = hidden("md");
const lg = hidden("lg");
const xl = hidden("xl");
const xxl = hidden("xxl");

const Base = styled.div`
  ${xs}
  ${sm}
  ${md}
  ${lg}
  ${xl}
  ${xxl}
`;

const Hide: React.StatelessComponent<any> = props => <Base {...props} />;

export default Hide;
