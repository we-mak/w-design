import styled from "styled-components";
import { ProgressLoaderProps } from "./types";

export const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
`;
ProgressContainer.displayName = "ProgressContainer";

export const ProgressWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
ProgressWrapper.displayName = "ProgressWrapper";

export const ProgressBar = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors["N3"]};
`;
ProgressBar.displayName = "ProgressBar";

export const ProgressTrack = styled.div<ProgressLoaderProps>`
  border-radius: 0.4rem;
  width: 50%;
  height: 8px;
  background: ${props => props.theme.colors["B50"]};
`;
ProgressTrack.displayName = "ProgressTrack";

export const ProgressStatus = styled.span`
  width: 2rem;
  word-break: normal;
  white-space: nowrap;
  margin: 0 0.4rem;
  font-size: ${props => props.theme.fontSizes[0]};
`;
ProgressStatus.displayName = "ProgressStatus";
