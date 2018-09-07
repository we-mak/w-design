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

const xs = hidden("xs"),
  sm = hidden("sm"),
  md = hidden("md"),
  lg = hidden("lg"),
  xl = hidden("xl"),
  xxl = hidden("xxl");

export interface Props {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
}
const Base = styled.div`
  ${xs}
  ${sm}
  ${md}
  ${lg}
  ${xl}
  ${xxl}
`;

const Hide: React.StatelessComponent<Props | any> = props => (
  <Base {...props} />
);

export default Hide;
