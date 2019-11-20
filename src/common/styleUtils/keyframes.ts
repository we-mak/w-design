import { keyframes } from "styled-components";

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
    }
`;

export const dashRotate = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1.6rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInOut = keyframes`
  0% {
    opacity: .1;
  }

  50% {
    opacity: .2;
  }

  100% {
    opacity: .1;
  }
`;
