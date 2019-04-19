import * as React from "react";
import styled, { css } from "styled-components";
import FormGroup from "../../components/FormGroup";
import { CheckboxProps } from "./types";

const Label = styled.label`
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
Label.displayName = "Label";

const LabelText = styled.span`
  padding: 5px 0;
`;
LabelText.displayName = "LabelText";

const CheckboxInput = styled.input`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;
CheckboxInput.displayName = "CheckboxInput";

const getCheckedStyle = (props: CheckboxProps) => {
  if (props.isChecked) {
    return css`
      color: ${props.theme.colors["B50"]};
      fill: rgb(250, 251, 252);
    `;
  }

  return css`
    color: rgb(250, 251, 252);
    fill: transparent;
  `;
};

const CheckboxIcon = styled.span`
  line-height: 0;
  flex-shrink: 0;
  cursor: pointer;
  ${getCheckedStyle}
`;
CheckboxIcon.displayName = "CheckboxIcon";

// TODO: nested checkboxes
const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(
    props.isChecked !== undefined ? props.isChecked : props.defaultChecked
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (props.isDisabled) return null;
    if (props.onChange) props.onChange(e);

    if (e.target.checked !== undefined) {
      setChecked(e.target.checked);
    }

    return true;
  };

  return (
    <FormGroup>
      <Label>
        <CheckboxInput
          ref={props.checkboxRef}
          type="checkbox"
          name={props.name}
          checked={isChecked}
          disabled={props.isDisabled}
          value={props.value}
          onChange={onChange}
          {...props}
        />
        <CheckboxIcon>
          <svg width="28" height="28" viewBox="0 0 24 24" focusable="false" role="presentation">
            <g fillRule="evenodd">
              <rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2" />
              <path
                d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z"
                fill="inherit"
              />
            </g>
          </svg>
        </CheckboxIcon>
        <LabelText>{props.label}</LabelText>
      </Label>
    </FormGroup>
  );
};

export default Checkbox;
