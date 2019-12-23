import * as React from "react";
import styled from "styled-components";

const Container = styled.span`
  margin: auto;
  margin-left: 0.4rem;
  float: right;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  line-height: 0;
  font-size: 0px;
  user-select: none;
`;

export const Arrow = () => (
  <Container>
    <svg width="24" height="22" viewBox="0 0 24 24" focusable="false" role="presentation">
      <path
        d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z"
        fill="currentColor"
      />
    </svg>
  </Container>
);
