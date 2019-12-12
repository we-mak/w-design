import React, { FC } from "react";
import { SpinnerWrapper, SpinnerCircular, SpinnerCircle } from "./Styled";
import { SizeProps } from "../../../types/typings";

export interface SpinnerProps extends SizeProps {
  spinnerColor?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = "md", spinnerColor }) => {
  return (
    <SpinnerWrapper size={size}>
      <SpinnerCircular viewBox="25 25 50 50">
        <SpinnerCircle
          spinnerColor={spinnerColor}
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </SpinnerCircular>
    </SpinnerWrapper>
  );
};

export default Spinner;
