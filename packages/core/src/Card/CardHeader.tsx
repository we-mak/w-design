import * as React from "react";
import styled from "styled-components";
import Typo from "../Typo";
import { GlobProps } from "../common/props";

export interface CardHeaderProps extends GlobProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
}

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
CardHeaderDescription.displayName = "CardHeaderDescription";

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
