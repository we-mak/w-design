import React, { FC } from "react";
import { SpinnerProps } from "./types";
import { SpinnerWrapper, SpinnerCircular, SpinnerCircle } from "./Styled";

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
export { SpinnerProps };
