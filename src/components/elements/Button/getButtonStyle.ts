import { css } from "../../../utils/styled";
import theme from "../../../common/theme";
import hex2Rgba from "../../../utils/hex2Rgba";
import { SpinnerStyle } from "../Spinner/Spinner";

const { colors } = theme;

/**
 * getAppearanceProps
 * @param appearance take the apperance props
 * @returns style applies to each button appearance
 */
const getAppearanceProps = (
  appearance?: "default" | "primary" | "danger" | "warning" | "success" | "link"
) => {
  const appearances = {
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
          background: ${colors.B40};
          border-color: ${colors.B60};
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
          background: ${colors.O30};
          border-color: ${colors.O40};
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
          background: ${colors.G30};
          border-color: ${colors.G40};
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
        color: ${colors.B50};
        border: none;
        &:hover {
          background: ${colors.N3};
          color: ${colors.B60};
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

  return appearances[appearance || "default"];
};

/**
 * getSizeProps
 * Take each size props as params to return style
 */
const getSizeProps = (props?: "sm" | "md" | "lg") => {
  const sizes = {
    sm() {
      return `
        font-size: .7rem;
        height: 1.4rem;
        padding: .15rem .3rem;
      `;
    },
    md() {
      return `
        height: 1.8rem;
        font-size: 0.8rem;
        padding: 0.35rem 0.4rem;
      `;
    },
    lg() {
      return `
        font-size: .9rem;
        height: 2rem;
        padding: .45rem .6rem;
      `;
    }
  };

  return sizes[props || "md"];
};

/**
 * getLoadingState
 * Apply style to each appearance when loading props is true
 */
const getLoadingState = (props: any) => {
  if (props.isLoading) {
    if (props.appearance === "default" || props.appearance === "link") {
      return SpinnerStyle;
    }

    return css`
      ${SpinnerStyle};
      &::after {
        border-color: ${colors.WHITE};
        border-right-color: transparent;
        border-top-color: transparent;
      }
    `;
  }

  return;
};

export const getButtonStyle = (props: any) => {
  /** Button type style*/
  const buttonAppearance = getAppearanceProps(props.appearance);

  /** Variable styled*/
  const buttonSize = getSizeProps(props.elementSize);

  let width;
  if (props.fluid) width = "100%";

  const loadingStyle = getLoadingState(props);

  return css`
    cursor: pointer;
    outline: 0;
    border-radius: 0.1rem;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: ${width};
    &:disabled,
    &[disabled] {
      cursor: not-allowed;
      color: ${colors.N7} !important;
      background: ${colors.N4} !important;
      border: none;
    }

    ${buttonSize};
    ${buttonAppearance};
    ${loadingStyle};
  `;
};
