import styled from "styled-components";
import { spin, dashRotate } from "@w-design/helpers";
import { SizeProps } from "../../../types/typings";

const spinnerSize = ({ size }: SizeProps) => {
  if (size === "sm") return `1.4`;
  if (size === "lg") return `3`;
  return `2`;
};

export const SpinnerWrapper = styled.div<SizeProps>`
  position: relative;
  margin: 0 auto;
  width: ${spinnerSize}rem;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export const SpinnerCircular = styled.svg`
  animation: ${spin} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
SpinnerCircular.displayName = "SpinnerCircular";

export const SpinnerCircle = styled.circle<{ spinnerColor?: string }>`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dashRotate} 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: ${props =>
    props.spinnerColor ? props.spinnerColor : props.theme.colors["B50"]};
  stroke-width: 3;
  stroke-miterlimit: 10;
`;
