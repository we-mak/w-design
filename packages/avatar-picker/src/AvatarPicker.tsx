import * as React from "react";

export type crossOriginType = "" | "anonymous" | "use-credentials";

export interface PositionProps {
  x: number;
  y: number;
}

export interface AvatarPickerProps {
  scale: number;
  rotate: number;
  image: File;
  border: number | number[];
  borderRadius: number;
  width: number;
  height: number;
  position: PositionProps;
  crossOrigin: crossOriginType;
  // onLoadFailure: func,
  // onLoadSuccess: func,
  // onImageReady: func,
  // onImageChange: func,
  // onMouseUp: func,
  // onMouseMove: func,
  // onPositionChange: func,
  disableBoundaryChecks: boolean;
  disableHiDPIScaling: boolean;
  disableCanvasRotation: boolean;
}

const AvatarPicker = () => {
  const avatarPickerRef: React.MutableRefObject<any> = React.useRef();

  return <canvas ref={avatarPickerRef} />;
};

export default AvatarPicker;
