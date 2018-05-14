import { css } from "../../../utils/styled";
import { colors } from "../../../common/colors";
import hex2Rgba from "../../../utils/hex2Rgba";
import { BtnProps } from "./Button";

const getButtonType = (btnType?: string) => {
  const btnTypes = {
    default() {
      return `
        border: 0.05rem solid ${colors.N3};
        background: ${colors.N3};
        color: ${colors.N90};

        &:hover {
          background: ${colors.N4};
          border-color: ${colors.N4};
        }

        &:focus, &:active {
          background: ${colors.B5};
          border-color: ${colors.B5};
        }

        &:focus {
          color: ${colors.B60};
        }

        &:active {
          color: ${colors.N90};
        }
      `;
    },
    primary() {
      return `
        border: 0.05rem solid ${colors.B60};
        background: ${colors.B50};
        color: ${colors.N1};

        &:hover {
          background: ${colors.B40};
        }

        &:focus {
          background: ${colors.B60};
          border-color: ${colors.B70};
          box-shadow: 0 0 0 0.1rem ${hex2Rgba(colors.B5)};
          color: ${colors.WHITE};
        }

        &:active {
          background: ${colors.B60};
          border-color: ${colors.B70};
          color: ${colors.N1};
        }
      `;
    },
    danger() {
      return `
        border: 0.05rem solid ${colors.R40};
        background: ${colors.R30};
        color: ${colors.N1};

        &:hover {
          background: ${colors.R20};
        }

        &:focus {
          background: ${colors.R30};
          border-color: ${colors.R40};
          box-shadow: 0 0 0 0.1rem ${hex2Rgba(colors.R5)};
          color: ${colors.WHITE};
        }

        &:active {
          background: ${colors.R40};
          border-color: ${colors.R50};
          color: ${colors.N1};
        }
      `;
    },
    warning() {
      return `
        border: 0.05rem solid ${colors.O50};
        background: ${colors.O40};
        color: ${colors.N1};

        &:hover {
          background: ${colors.O30};
        }

        &:focus {
          background: ${colors.O40};
          border-color: ${colors.O50};
          box-shadow: 0 0 0 0.1rem ${hex2Rgba(colors.O10)};
          color: ${colors.WHITE};
        }

        &:active {
          background: ${colors.O40};
          border-color: ${colors.O50};
          color: ${colors.N1};
        }
      `;
    },
    success() {
      return `
        border: 0.05rem solid ${colors.G40};
        background: ${colors.G30};
        color: ${colors.N1};

        &:hover {
          background: ${colors.G20};
        }

        &:focus {
          background: ${colors.G40};
          border-color: ${colors.G50};
          box-shadow: 0 0 0 0.1rem ${hex2Rgba(colors.G7)};
          color: ${colors.WHITE};
        }

        &:active {
          background: ${colors.G40};
          border-color: ${colors.G50};
          color: ${colors.N1};
        }
      `;
    },
    link() {
      return `
        outline: 0;
        text-decoration: none !important;
        &:hover {
          background: ${colors.N3};
          color: ${colors.N5};
        }
        &:focus {
          background: ${colors.B5};

        }
        &:active {

          background: ${colors.B5};
          box-shadow: 0 0 0 0.1rem ${hex2Rgba(colors.B50)};
        }
      `;
    }
  };

  return btnTypes[btnType ? btnType : "default"];
};

export const getButtonStyle = (props: BtnProps) => {
  /** Button type style*/
  const { btnType } = props;

  const buttonStyle = getButtonType(btnType);

  return css`
    cursor: pointer;
    outline: 0;
    border-radius: 0.1em;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    height: 1.8rem;
    font-size: 0.8rem;
    padding: 0.35rem 0.4rem;

    ${buttonStyle};
  `;
};
