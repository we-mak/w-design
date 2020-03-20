import { css } from "styled-components";
import { InputSlideProps } from "./";

export const getSlideStyle = ({ theme, value }: InputSlideProps) => {
  const trackStyle = css`
    appearance: none;
    height: 5px;
    cursor: pointer;
  `;

  const thumbStyle = css`
    appearance: none;
    border: none;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: -7px;
    box-shadow: ${theme.shadows[1]};
    background-color: white;
    position: absolute;
    left: ${value}%;
  `;

  return css`
    appearance: none;
    background-position: right center;
    box-sizing: border-box;

    &[type="range"] {
      width: 100%;
      height: 5px;
      border-radius: 5px;
      margin: 0;
      background: ${theme.colors["N5"]};
      cursor: default;

      &::-webkit-slider-runnable-track {
        ${trackStyle}
      }
      &::-moz-range-track {
        ${trackStyle}
      }

      &::-webkit-slider-thumb {
        ${thumbStyle}
      }
      ::-moz-range-thumb {
        ${thumbStyle}
      }
      /*hide the outline behind the border*/
      &:-moz-focusring {
        outline: 1px solid white;
        outline-offset: -1px;
      }

      &:focus {
        outline: none;
      }
    }
  `;
};
