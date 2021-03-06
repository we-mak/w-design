import * as React from "react";
import styled, { css } from "styled-components";
import { getValFromObjKey } from "@w-design/helpers";
import { GlobProps } from "../common/props";

export interface BadgeProps extends GlobProps {
  children: number | string;
  // maximum count
  maxCount?: number;
  appearance: "default" | "primary" | "danger";
}

const bg = {
  default: "N3",
  primary: "B50",
  danger: "R30"
};

const getBadgeStyle = ({ appearance = "default", theme }: BadgeProps) => {
  const { colors, padding } = theme;

  const bgStyle = getValFromObjKey(appearance, bg);
  const colorStyle = appearance === "default" ? colors["N70"] : "#fff";

  return css`
    display: inline-block;
    min-width: 1px;
    text-align: center;
    border-radius: 2rem;
    font-weight: normal;
    font-size: 11px;
    color: ${colorStyle};
    padding: ${padding["xs"]};
    background: ${colors[bgStyle]};
  `;
};

const Container = styled.span<BadgeProps>`
  ${getBadgeStyle}
`;

const Badge = ({ maxCount, children, ...rest }: BadgeProps) => {
  let number: number | string;

  if (typeof children === "string") {
    number = parseInt(children);
  } else {
    number = children;
  }

  if (maxCount && number > maxCount) {
    number = `${maxCount}+`;
  }

  return (
    <Container maxCount={maxCount} {...rest}>
      {number}
    </Container>
  );
};

export default Badge;
