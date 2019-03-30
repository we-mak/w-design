/**
 * Container
 *
 * Wrapper layout component contains columns layout
 */
import styled from "styled-components";
import Tag from "clean-tag";
import { color, space, display, maxWidth, minWidth } from "styled-system";

const Container = styled(Tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${color};
  ${space};
  ${display};
  ${maxWidth};
  ${minWidth};
  font-family: ${(props: any) => props.theme.fonts.normal};
`;

Container.displayName = "Container";

export default Container;
