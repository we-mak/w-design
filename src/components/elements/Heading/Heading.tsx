import * as React from "react";
import tag from "clean-tag";
import { colors } from "../../../common/colors";
import styled from "../../../utils/styled";
import BaseStyle from "./BaseStyle";

type StyleProps = {
  /** html tag */
  as?: string;
};

const TagElement = ({ as, ...props }: StyleProps) =>
  React.createElement(tag[as ? as : "div"], { ...props });

// H1
const H1 = styled(TagElement)`
  font-size: 2rem;
  color: ${colors.N90};
  ${BaseStyle};
`;

// H2
const H2 = styled(TagElement)`
  font-size: 1.6rem;
  color: ${colors.N90};
  ${BaseStyle};
`;

// H3
const H3 = styled(TagElement)`
  font-size: 1.4rem;
  color: ${colors.N90};
  ${BaseStyle};
`;

// H4
const H4 = styled(TagElement)`
  font-size: 1.2rem;
  color: ${colors.N90};
  ${BaseStyle};
`;

// H5
const H5 = styled(TagElement)`
  font-size: 1rem;
  color: ${colors.N70};
  ${BaseStyle};
`;

// H6
const H6 = styled(TagElement)`
  font-size: 0.8rem;
  color: ${colors.N70};
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

export default Heading;
