import * as React from "react";
import styled from "styled-components";

type ArrowProps = {
  isOpen?: boolean;
};

const Container = styled.span<ArrowProps>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
  transition: transform 0.3s cubic-bezier(0.5, 0.045, 0.4, 1);
  will-change: transform;
  ${props => props.isOpen && `transform: rotate(-180deg);`}
`;

export const Arrow = ({ isOpen }: ArrowProps) => (
  <Container isOpen={isOpen}>
    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
      <path
        d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z"
        fill="currentColor"
      />
    </svg>
  </Container>
);
