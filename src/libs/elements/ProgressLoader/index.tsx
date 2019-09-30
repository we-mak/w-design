import * as React from "react";
import {
  ProgressContainer,
  ProgressWrapper,
  ProgressBar,
  ProgressTrack,
  ProgressStatus
} from "./Styled";
import { ProgressLoaderProps } from "./types";

const ProgressLoader: React.FC<ProgressLoaderProps> = ({ percent = 0 }) => {
  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressBar>
          <ProgressTrack percent={percent} />
        </ProgressBar>
        <ProgressStatus title={`${percent}%`}>{percent}%</ProgressStatus>
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default ProgressLoader;
