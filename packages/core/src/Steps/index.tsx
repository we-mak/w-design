import * as React from "react";
import styled from "styled-components";
import Box from "../Box";
import Container from "../Container";
import { getNaveItemTextStyle, getNavItemNumberStyle } from "./getStyled";

const StepNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0.2rem;
`;
StepNav.displayName = "StepNav";

export type StepItemTypes = {
  theme?: any;
  isActive?: boolean;
  status?: "progress" | "loading" | "finish";
};

const StepItem = styled.li<StepItemTypes>`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
StepItem.displayName = "StepItem";

const StepItemNumber = styled.div<StepItemTypes>`
  ${getNavItemNumberStyle}
`;
StepItemNumber.displayName = "StepItemNumber";

const StepItemTitle = styled.div<StepItemTypes>`
  ${getNaveItemTextStyle}
`;
StepItemTitle.displayName = "StepItemTitle";

export type StepType = {
  title: string;
  content: React.ReactNode | string;
};

export interface Steps {
  steps: StepType[];
  activeIndex?: number;
  controlGroup?: React.ReactNode;
}

const Steps = ({ steps = [], activeIndex = 0, controlGroup }: Steps) => {
  return (
    <Container>
      <StepNav>
        {steps.map((step, idx) => {
          const active = activeIndex === idx;
          return (
            <StepItem key={idx} isActive={active}>
              <StepItemNumber isActive={active}>{idx + 1}</StepItemNumber>
              <StepItemTitle isActive={active}>{step.title}</StepItemTitle>
            </StepItem>
          );
        })}
      </StepNav>

      <Box p="0.5rem 0" data-testid="step-content">
        {steps[activeIndex].content}
      </Box>

      {controlGroup}
    </Container>
  );
};

export default Steps;
