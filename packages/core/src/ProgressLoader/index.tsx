import * as React from "react";
import Icon from "../Icon";
import {
  ProgressContainer,
  ProgressWrapper,
  ProgressBar,
  ProgressTrack,
  ProgressStatus
} from "./Styled";
import { GlobProps, SizeProps } from "../common/props";

export interface ProgressLoaderProps extends GlobProps, SizeProps {
  /* The completation in percent*/
  percent: number;
  /* Status of progress */
  status?: "progress" | "success" | "error";
  /** TODO: Type of progress */
  // appearance?: "line" | "circle";
  /* To show percent value of completation and icon */
  showInfo?: boolean;
  /* size of progress bar*/
  size?: "sm" | "md";
}

const ProgressLoader: React.FC<ProgressLoaderProps> = ({
  percent = 0,
  showInfo = true,
  status = "progress",
  size
}) => {
  const [progressStatus, setProgressStatus] = React.useState(status);

  React.useEffect(() => {
    if (percent === 100 && status !== "error") {
      setProgressStatus("success");
    } else {
      setProgressStatus(status);
    }
  }, [percent, status]);

  const stats = () => {
    if (percent === 100 && progressStatus !== "error") {
      return <Icon className="fas fa-check-circle success" />;
    }
    if (status === "error") {
      return <Icon className="fas fa-times-circle error" />;
    }
    return `${percent}%`;
  };

  return (
    <ProgressContainer>
      <ProgressWrapper>
        <ProgressBar>
          <ProgressTrack percent={percent} status={progressStatus} size={size} />
        </ProgressBar>
        {showInfo && <ProgressStatus title={`${percent}%`}>{stats()}</ProgressStatus>}
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default React.memo(ProgressLoader);
