import styled from "styled-components";
import { CheckboxProps } from "./types";

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  position: relative;
  line-height: 1.2;
  margin: ${props => props.theme.space[1]}px 0;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
Label.displayName = 'Label'

export const LabelText = styled.span`
  padding: 5px 0;
`;
LabelText.displayName = 'LabelText'

export const CheckboxInput = styled.input`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;
CheckboxInput.displayName = 'CheckboxInput'

export const CheckboxIcon = styled.span<CheckboxProps>`
  line-height: 0;
  flex-shrink: 0;
  color: rgb(250, 251, 252);
  fill: transparent;
  cursor: pointer;
`;
CheckboxIcon.displayName = 'CheckboxIcon'

/* &:checked {
    color: ${props => props.theme.colors["B50"]};
    fill: rgb(250, 251, 252);
  } */
