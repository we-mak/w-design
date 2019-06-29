import * as React from "react";
import styled from "styled-components";
import Typo from "../../elements/Typo";
import { CardHeaderProps } from "./types";

const CardHeaderWrapper = styled.div`
  padding: 0.8rem;
  position: relative;
  &:not(:first-child) {
    padding-bottom: 0;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 0.2em;
  }
`;
CardHeaderWrapper.displayName = "CardHeaderStyled";

const CardHeaderDescription = styled.div`
  color: ${props => props.theme.colors["N30"]};
  font-size: ${props => props.theme.fontSizes[0]};
`;

export const CardHeader = ({ title, children, description, ...rest }: CardHeaderProps) => {
  return (
    <CardHeaderWrapper {...rest}>
      {title && (
        <Typo appearance="h5" tag="h3">
          {title}
        </Typo>
      )}
      {description && <CardHeaderDescription>{description}</CardHeaderDescription>}
      {children}
    </CardHeaderWrapper>
  );
};
