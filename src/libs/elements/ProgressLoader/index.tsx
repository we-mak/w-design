import * as React from "react";
import Icon from "../Icon";
import {
  ProgressContainer,
  ProgressWrapper,
  ProgressBar,
  ProgressTrack,
  ProgressStatus
} from "./Styled";
import { ProgressLoaderProps } from "./types";

const ProgressLoader: React.FC<ProgressLoaderProps> = ({
  percent = 0,
  showInfo = true,
  status = "normal",
  size
}) => {
  const [progressStatus, setProgressStatus] = React.useState(status);

  React.useEffect(() => {
    if (percent === 100) {
      setProgressStatus("success");
    }
  }, [percent]);

  const stats = () => {
    if (percent === 100) {
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
