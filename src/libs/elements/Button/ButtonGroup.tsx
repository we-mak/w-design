/**
 * Button Group
 */
import * as React from "react";
import styled from "styled-components";

const ButtonGroupWrapper = styled.div`
  display: inline-flex;
`;

const ButtonGroupItem = styled.div`
  flex: 1 0 auto;
  display: flex;
  & + &::before {
    content: "";
    display: inline-block;
    width: 0.4rem;
  }
`;

export const ButtonGroup: React.FC<React.ReactNode> = ({ children }) => (
  <ButtonGroupWrapper>
    {React.Children.map(children, (child, idx) => {
      return (
        <ButtonGroupItem key={idx}>{React.cloneElement(child as JSX.Element)}</ButtonGroupItem>
      );
    })}
  </ButtonGroupWrapper>
);
