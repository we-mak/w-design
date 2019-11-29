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

const getProgressTrackStyle = (props: ProgressLoaderProps) => {
  const { theme, percent, size, status } = props;

  let height = "0.4rem";
  let background = theme.colors["B50"];

  if (size === "sm") {
    height = "0.2rem";
  }

  switch (status) {
    case "progress":
      background = theme.colors["B50"];
      break;
    case "success":
      background = theme.colors["G30"];
      break;
    case "error":
      background = theme.colors["R30"];
      break;
  }

  return `
  background: ${background};
  width: ${percent}%;
  height: ${height};
`;
};

export const ProgressTrack = styled.div`
  border-radius: 0.4rem;
  ${getProgressTrackStyle};
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
