import * as React from "react";
import FormGroup from "../../components/FormGroup";
import { RadioProps } from "./types";
import { Radio } from "./Radio";

const RadioGroup = (props: RadioProps) => {
  return (
    <FormGroup>
      <Radio {...props} />
    </FormGroup>
  );
};

export default RadioGroup;
