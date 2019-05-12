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

// Get checked style for the icon
const getCheckedStyle = (props: CheckboxProps) =>
  props.isChecked
    ? css`
        color: ${props.theme.colors["B50"]};
        fill: rgb(250, 251, 252);
        rect {
          &:first-child {
            stroke: ${props.theme.colors["B50"]};
          }
        }
      `
    : css`
        color: rgb(250, 251, 252);
        fill: transparent;
        rect {
          &:first-child {
            stroke: ${props.theme.colors["N5"]};
          }
        }
      `;

const CheckboxIcon = styled.span`
  line-height: 0;
  flex-shrink: 0;
  cursor: pointer;
  rect {
    &:first-child {
      stroke-width: 0.08rem;
      transition: stroke 0.2s ease-in-out 0s;
    }
  }
  ${getCheckedStyle}
`;
CheckboxIcon.displayName = "CheckboxIcon";

// TODO: nested checkboxes
const Checkbox = ({
  checkboxRef,
  name,
  label,
  defaultChecked = false,
  isDisabled = false,
  isRequired,
  value,
  onChange,
  ...rest
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(defaultChecked);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return null;
    e.persist();
    // set onChange props
    if (onChange) onChange(e);

    if (e.target.checked !== undefined) {
      setChecked(e.target.checked);
    }

    return true;
  };

  return (
    <FormGroup>
      <Label>
        <CheckboxInput
          ref={checkboxRef}
          type="checkbox"
          name={name}
          checked={isChecked}
          disabled={isDisabled}
          value={value}
          onChange={onCheckboxChange}
          required={isRequired}
          {...rest}
        />
        <CheckboxIcon isChecked={isChecked}>
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
        <LabelText>{label}</LabelText>
      </Label>
    </FormGroup>
  );
};

export default Checkbox;
