import * as React from "react";
import styled from "styled-components";
import { RadioIcon } from "./RadioIcon";
import { RadioProps } from "./types";

const Label = styled.label<RadioProps>`
  display: flex;
  align-items: flex-start;
  position: relative;
  line-height: 1.2;
  margin: ${props => props.theme.space[1]}px 0;
  user-select: none;
  &:hover {
    cursor: ${props => (props.isDisabled ? `not-allowed` : `pointer`)};
  }

  ${props => props.isDisabled && `opacity: 0.7`};
`;
Label.displayName = "Label";

const RadioInput = styled.input`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;
RadioInput.displayName = "RadioInput";

export const Radio = ({ isChecked, ...rest }: RadioProps) => {
  return (
    <Label>
      <RadioInput type="radio" checked={isChecked} {...rest} />
      <RadioIcon isChecked={isChecked}>
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fillRule="evenodd">
            <circle fill="currentColor" cx="12" cy="12" r="8" />
            <circle fill="inherit" cx="12" cy="12" r="4" />
          </g>
        </svg>
      </RadioIcon>
    </Label>
  );
};
