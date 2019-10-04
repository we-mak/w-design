import styled, { css } from "styled-components";

type IconProps = {
  theme?: any;
  isChecked?: boolean;
};
// Get checked style for the icon
const getCheckedStyle = (props: IconProps) => {
  if (props.isChecked) {
    return css`
      color: ${props.theme.colors["B50"]};
      fill: ${props.theme.colors["N1"]};
      circle {
        &:first-of-type {
          stroke: ${props.theme.colors["B50"]};
        }
      }
    `;
  }

  return css`
    color: ${props.theme.colors["N1"]};
    fill: transparent;
    circle {
      &:first-of-type {
        stroke: ${props.theme.colors["N5"]};
      }
    }
  `;
};

export const RadioIcon = styled.div`
  line-height: 0;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  circle {
    &:first-of-type {
      stroke-width: 0.08rem;
      transition: stroke 0.2s ease-in-out 0s;
    }
  }
  ${getCheckedStyle}
`;
RadioIcon.displayName = "RadioIcon";
