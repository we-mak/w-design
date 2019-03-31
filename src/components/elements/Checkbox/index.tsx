import * as React from "react";
import FormGroup from "../../components/FormGroup";
import { CheckboxInput, Label, LabelText, CheckboxIcon } from "./Styled";
import { CheckboxProps } from "./types";

// TODO: nested checkboxes

const Icon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" focusable="false" role="presentation">
    <g fillRule="evenodd">
      <rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2" />
      <path
        d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z"
        fill="inherit"
      />
    </g>
  </svg>
);

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
        <CheckboxIcon isChecked={isChecked}>
          <Icon />
        </CheckboxIcon>
        <LabelText>{props.label}</LabelText>
      </Label>
    </FormGroup>
  );
};

export default Checkbox;
