import * as React from "react";
import tag from "clean-tag";
import theme from "../../../common/theme";
import styled from "../../../utils/styled";
import BaseStyle from "./BaseStyle";

type Props = {
  /** html tag */
  as?: string;
};

const getThemeColor = (props: any) => props.theme.colors[props.color];

const TagElement = ({ as, ...props }: Props) =>
  React.createElement(tag[as || "div"], { ...props });

const { colors } = theme;
// H1
const H1 = styled(TagElement)`
  font-size: 2rem;
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;

// H2
const H2 = styled(TagElement)`
  font-size: 1.6rem;
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;

// H3
const H3 = styled(TagElement)`
  font-size: 1.4rem;
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;

// H4
const H4 = styled(TagElement)`
  font-size: 1.2rem;
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;

// H5
const H5 = styled(TagElement)`
  font-size: 1rem;
  color: ${(props: any) => getThemeColor(props) || colors.N70};
  ${BaseStyle};
`;

// H6
const H6 = styled(TagElement)`
  font-size: 0.8rem;
  color: ${(props: any) => getThemeColor(props) || colors.N70};
  ${BaseStyle};
`;

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

Heading.H1.displayName = "Heading.H1";
Heading.H2.displayName = "Heading.H2";
Heading.H3.displayName = "Heading.H3";
Heading.H4.displayName = "Heading.H4";
Heading.H5.displayName = "Heading.H5";
Heading.H6.displayName = "Heading.H6";

export default Heading;
