import * as React from "react";
import tag from "clean-tag";
import { color, fontSize } from "styled-system";
import theme from "../../../common/theme";
import styled from "../../../utils/styled";
import BaseStyle from "./BaseStyle";

type Props = {
  /** custom html tag */
  customComponent?: string;
};

const TagElement = ({ customComponent, ...props }: Props) =>
  React.createElement(tag[customComponent || "div"], { ...props });

const { colors, fontSizes } = theme;
// H1
const H1 = styled(TagElement)`
  font-size: ${fontSizes[8]};
  color: ${colors.N90};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H1.displayName = "Heading.H1";

// H2
const H2 = styled(TagElement)`
  font-size: ${fontSizes[6]};
  color: ${colors.N90};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H2.displayName = "Heading.H2";

// H3
const H3 = styled(TagElement)`
  font-size: ${fontSizes[5]};
  color: ${colors.N90};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H3.displayName = "Heading.H3";

// H4
const H4 = styled(TagElement)`
  font-size: ${fontSizes[4]};
  color: ${colors.N90};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H4.displayName = "Heading.H4";

// H5
const H5 = styled(TagElement)`
  font-size: ${fontSizes[3]};
  color: ${colors.N70};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H5.displayName = "Heading.H5";

// H6
const H6 = styled(TagElement)`
  font-size: ${fontSizes[1]};
  color: ${colors.N70};
  ${BaseStyle};
  ${color};
  ${fontSize};
`;
H6.displayName = "Heading.H6";

class Heading extends React.Component<any> {
  static H1 = H1;
  static H2 = H2;
  static H3 = H3;
  static H4 = H4;
  static H5 = H5;
  static H6 = H6;

  static displayName = "Heading";

  render() {
    const children = React.Children.map(
      this.props.children,
      (child: React.ReactElement<any>) => React.cloneElement(child)
    );

    return <React.Fragment {...this.props}>{children}</React.Fragment>;
  }
}

export default Heading;
