import * as React from "react";
import styled from "styled-components";
import { Radio } from "./Radio";
import { RadioGroupProps, RadioProps } from "./types";

const RadioGroupLabel = styled.label`
  display: block;
  line-height: ${props => props.theme.lineHeights[0]};
  padding: ${props => props.theme.space[2]}px 0;
  font-weight: ${props => props.theme.fontWeights.strong};
`;
RadioGroupLabel.displayName = "RadioGroupLabel";

const RadioGroup = ({
  groupName,
  groupLabel,
  options = [],
  isRequired,
  isDisabled,
  onChange,
  value,
  defaultValue = ""
}: RadioGroupProps) => {
  const [optionValue, setValue] = React.useState(value !== undefined ? value : defaultValue);

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div>
      <RadioGroupLabel>{groupLabel}</RadioGroupLabel>
      {options.map((option: RadioProps, index: number) => {
        // set checked option
        if (optionValue !== null && optionValue === option.value) {
          option.isChecked = true;
        } else {
          option.isChecked = false;
        }

        // set disabled radios
        if (typeof isDisabled !== "undefined") {
          option.isDisabled = isDisabled;
        }

        return (
          <Radio
            key={index}
            name={groupName || option.name}
            label={option.label}
            value={optionValue}
            isRequired={isRequired}
            onChange={onRadioChange}
            {...option}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
