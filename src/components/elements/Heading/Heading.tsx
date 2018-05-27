import * as React from "react";
import tag from "clean-tag";
import theme from "../../../common/theme";
import styled from "../../../utils/styled";
import BaseStyle from "./BaseStyle";

type Props = {
  /** custom html tag */
  customComponent?: string;
};

const getThemeColor = (props: any) => props.theme.colors[props.color];

const TagElement = ({ customComponent, ...props }: Props) =>
  React.createElement(tag[customComponent || "div"], { ...props });

const { colors } = theme;
// H1
const H1 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[8]};
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;
H1.displayName = "Heading.H1";

// H2
const H2 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[6]};
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;
H2.displayName = "Heading.H2";

// H3
const H3 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[5]};
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;
H3.displayName = "Heading.H3";

// H4
const H4 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[4]};
  color: ${(props: any) => getThemeColor(props) || colors.N90};
  ${BaseStyle};
`;
H4.displayName = "Heading.H4";

// H5
const H5 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[3]};
  color: ${(props: any) => getThemeColor(props) || colors.N70};
  ${BaseStyle};
`;
H5.displayName = "Heading.H5";

// H6
const H6 = styled(TagElement)`
  font-size: ${(props: any) => props.theme.fontSizes[1]};
  color: ${(props: any) => getThemeColor(props) || colors.N70};
  ${BaseStyle};
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
