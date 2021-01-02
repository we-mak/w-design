import * as React from "react";
import Box from "src/Box";
import Container from "src/Container";
import styled from "styled-components";
import { getNavItemNumberStyle, getNaveItemTextStyle } from "./getStyled";

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

type stepsType = {
  title: string;
  content: React.ReactNode;
};

interface Steps {
  steps: Array<stepsType>;
  activeIndex?: number;
  controlGroup?: React.ReactNode;
}

const Steps = ({ activeIndex = 0, steps = [], controlGroup }: Steps) => {
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

      {steps.map((step, idx) => {
        return (
          activeIndex === idx && (
            <Box p="0.5rem 0" key={idx}>
              {step.content}
            </Box>
          )
        );
      })}

      {controlGroup}
    </Container>
  );
};

export default Steps;
