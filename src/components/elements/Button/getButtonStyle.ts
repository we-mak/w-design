import { css } from "../../../utils/styled";
import theme from "../../../common/theme";
import { SpinnerStyle } from "../Spinner/Spinner";
import { BtnProps } from "./buttonType";

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

        &:focus {
          box-shadow: 0 0 0 0.1rem ${colors.B5};
          background: ${colors.B5};
          border-color: ${colors.B5};
        }

        &:active {
          background: ${colors.B5};
          border-color: ${colors.B5};
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

        &:focus, &:active {
          background: ${colors.B60};
          border-color: ${colors.B70};
          color: ${colors.N1};
          box-shadow: 0 0 0 0.1rem ${colors.B5};
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

        &:focus, &:active {
          background: ${colors.R40};
          border-color: ${colors.R50};
          color: ${colors.N1};
          box-shadow: 0 0 0 0.1rem ${colors.R5};
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

        &:focus, &:active {
          background: ${colors.O40};
          border-color: ${colors.O50};
          color: ${colors.N1};
          box-shadow: 0 0 0 0.1rem ${colors.O10};
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

        &:focus, &:active {
          background: ${colors.G40};
          border-color: ${colors.G50};
          color: ${colors.N1};
          box-shadow: 0 0 0 0.1rem ${colors.G7};
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

        &:focus, &:active {
          background: ${colors.B5};
        }

        &:focus {
          box-shadow: 0 0 0 0.1rem ${colors.B50};
        }

        &:active {
          box-shadow: none;
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

/** Apply style to each appearance when loading props is true */
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

  return null;
};

const getSelected = (props: any) => {
  if (props.isSelected) {
    if (
      props.appearance === "default" ||
      props.appearance === "link" ||
      props.appearance === "primary"
    ) {
      return `
        background: ${colors.B70};
        border: 0.05rem solid ${colors.B50};
        color: ${colors.N1};
        &:hover,
        &:focus,
        &:active {
          background: ${colors.B70};
          border: 0.05rem solid ${colors.B50};
          color: ${colors.N1};
          outline: none;
          box-shadow: none;
        }
      `;
    }

    if (props.appearance === "danger") {
      return `
        border: 0.05rem solid ${colors.R40} !important;
        background: ${colors.R30} !important;
        color: ${colors.N1} !important;
        &:focus, &:active {
          box-shadow: none;
        }
      `;
    }

    if (props.appearance === "warning") {
      return `
        border: 0.05rem solid ${colors.O50} !important;
        background: ${colors.O40} !important;
        color: ${colors.N1} !important;
        &:focus, &:active {
          box-shadow: none;
        }
      `;
    }
  }
  return null;
};

/**
 * getButtonStyle
 * Resolves styles based on props
 * @param props button properties
 */
export const getButtonStyle = (props: BtnProps) => {
  /** Button type style*/
  const buttonAppearance = getAppearanceProps(props.appearance);

  /** Variable styled*/
  const buttonSize = getSizeProps(props.elementSize);

  let width;
  if (props.fluid) width = "100%";

  const loadingStyle = getLoadingState(props);

  const selectedStyle = getSelected(props);

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
    ${selectedStyle};
  `;
};
