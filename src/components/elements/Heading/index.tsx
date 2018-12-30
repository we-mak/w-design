import * as React from "react";
import styled, { css } from "styled-components";
import { fontWeight, fontSize, color } from "styled-system";
import { CustomTag } from "../../../common/utils/customTag";
import { GlobProps } from "../../../typings";
import {
  colors,
  fontWeights,
  fontSizes
} from "../../../common/styleUtils/theme";

const BaseStyle = css`
  display: block;
  line-height: 1.25;
  margin-bottom: 0.5em;
  margin-top: 0;
  font-weight: ${fontWeights["bold"]};
  color: ${colors["N50"]};
  /* Custom style*/
  ${color}
  ${fontWeight}
`;

const H1 = styled(CustomTag)`
  font-size: ${fontSizes[8]};
  ${BaseStyle}
  ${fontSize}
`;
H1.displayName = "H1";

const H2 = styled(CustomTag)`
  font-size: ${fontSizes[6]};
  ${BaseStyle}
  ${fontSize}
`;
H2.displayName = "H2";

const H3 = styled(CustomTag)`
  font-size: ${fontSizes[5]};
  ${BaseStyle}
  ${fontSize}
`;
H3.displayName = "H3";

const H4 = styled(CustomTag)`
  font-size: ${fontSizes[4]};
  ${BaseStyle}
  ${fontSize}
`;
H4.displayName = "H4";

const H5 = styled(CustomTag)`
  font-size: ${fontSizes[3]};
  ${BaseStyle}
  ${fontSize}
`;
H5.displayName = "H5";

const H6 = styled(CustomTag)`
  font-size: ${fontSizes[2]};
  ${BaseStyle}
  ${fontSize}
`;
H6.displayName = "H6";

interface HeadingProps extends GlobProps {
  children?: React.ReactChild;
}

class Heading extends React.PureComponent<HeadingProps> {
  static H1 = H1;
  static H2 = H2;
  static H3 = H3;
  static H4 = H4;
  static H5 = H5;
  static H6 = H6;

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child as React.ReactElement<HTMLElement>)
    );

    return <React.Fragment {...this.props}>{children}</React.Fragment>;
  }
}

export default Heading;
