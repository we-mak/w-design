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

const LabelText = styled.div`
  padding: 5px 0;
`;
LabelText.displayName = "LabelText";

const RadioInput = styled.input`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;
RadioInput.displayName = "RadioInput";

export const Radio = ({
  label,
  radioRef,
  defaultChecked = false,
  isDisabled,
  isRequired,
  value,
  isChecked = false,
  onChange = () => {},
  ...rest
}: RadioProps) => {
  return (
    <Label>
      <RadioInput
        ref={radioRef}
        aria-label={label}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
        value={value}
        required={isRequired}
        ariaRequired={isRequired}
        onChange={onChange}
        {...rest}
      />
      <RadioIcon isChecked={isChecked}>
        <svg width="28" height="28" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fillRule="evenodd">
            <circle fill="currentColor" cx="12" cy="12" r="7" />
            <circle fill="inherit" cx="12" cy="12" r="3" />
          </g>
        </svg>
      </RadioIcon>
      <LabelText>{label}</LabelText>
    </Label>
  );
};
