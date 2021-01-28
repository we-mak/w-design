import * as React from "react";
import FormGroup from "../FormGroup";
import { CheckboxProps } from "../Checkbox";
import Label from "../Label";
import styled from "styled-components";

const ToggleLabel = styled(Label)`
  display: block;
  line-height: 1.2rem;
  margin: 0.2rem 0;
  min-height: 1.4rem;
  padding: 0.1rem 0.4rem 0.1rem 2rem;
  position: relative;
  font-weight: normal;
`;

const ToggleInput = styled.input`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;

const ToggleIcon = styled.i`
  background: #bcc3ce;
  background-clip: padding-box;
  border-radius: 0.45rem;
  height: 0.9rem;
  left: 0;
  top: 0.25rem;
  width: 1.6rem;
  border: 0.05rem solid #bcc3ce;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;

  &::before {
    background: #fff;
    border-radius: 50%;
    content: "";
    display: block;
    height: 0.8rem;
    left: 0;
    position: absolute;
    top: 0;
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s,
      left 0.2s;
    width: 0.8rem;
  }
  &[data-checked="true"] {
    border-color: ${(props) => props.theme.colors["B50"]};
    background-color: ${(props) => props.theme.colors["B50"]};
    &::before {
      left: 14px;
    }
  }
`;

const Toggle: React.FC<CheckboxProps> = ({
  label,
  isDisabled,
  defaultChecked = false,
  onChange,
  ...rest
}) => {
  const [isChecked, setChecked] = React.useState(defaultChecked);

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return null;
    e.persist();

    if (onChange) onChange(e);

    if (e.target.checked !== undefined) {
      setChecked(e.target.checked);
    }

    return true;
  };
  return (
    <FormGroup>
      <ToggleLabel>
        <ToggleInput
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          {...rest}
        />
        <ToggleIcon data-checked={isChecked} />
        {label}
      </ToggleLabel>
    </FormGroup>
  );
};

export default Toggle;
