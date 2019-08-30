import styled from "styled-components";

const Label = styled.label`
  display: block;
  line-height: 1.8;
  font-weight: ${props => props.theme.fontWeights.strong};
  padding: ${props => props.theme.space[2]}px 0;
`;
Label.displayName = "Label";

export default Label;
