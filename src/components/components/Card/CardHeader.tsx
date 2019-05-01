import * as React from "react";
import styled from "styled-components";
import Typo from "../../elements/Typo";
import { CardHeaderProps } from "./types";

const CardHeaderWrapper = styled.div`
  padding: 0.8rem;
  padding-bottom: 0;
  h3 {
    font-weight: 500;
  }
`;
CardHeaderWrapper.displayName = "CardHeaderComponent";

export const CardHeader = ({ title, ...rest }: CardHeaderProps) => {
  return (
    <CardHeader {...rest}>
      <Typo appearance="h4" tag="h3">
        {title}
      </Typo>
    </CardHeader>
  );
};
