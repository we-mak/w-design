import * as React from "react";
import {
  GlobProps,
  SyntheticEventProps,
  KeyboardEventProps,
  InputControlProps
} from "@w-design/core/lib/types/common/props";
import styled from "styled-components";
import { getSlideStyle } from "./getSlideStyle";
import { Track } from "./Track";

export interface InputSlideProps
  extends GlobProps,
    SyntheticEventProps,
    KeyboardEventProps,
    InputControlProps {
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  tabIndex?: number;
  /** input ref*/
  inputRef?: (ref: HTMLInputElement) => {};
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Slide = styled.input<InputSlideProps>`
  ${getSlideStyle}
`;

const InputRange = ({
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  ...rest
}: InputSlideProps) => {
  const initVal = value ? value : defaultValue ? defaultValue : min;

  const [val, setVal] = React.useState(initVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // pass onChange event to props
    if (onChange) {
      onChange(e);
    }

    // calculate track range
    setVal(e.target.value);
  };

  const renderSlide = () => {
    return (
      <Slide
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        value={val}
        onChange={handleChange}
        {...rest}
      />
    );
  };

  return (
    <Container>
      <Track
        style={{
          left: `${val}%`
        }}
      />

      {renderSlide()}
    </Container>
  );
};

export default InputRange;
