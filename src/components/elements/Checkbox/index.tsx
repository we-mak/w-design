import * as React from "react";
import { CheckboxGroup, CheckboxInput, CheckboxLabel } from "./Styled";
import { CheckboxProps } from "./types";

const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <CheckboxGroup>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" {...rest} />
        {label}
      </CheckboxLabel>
    </CheckboxGroup>
  );
};

export default Checkbox;
