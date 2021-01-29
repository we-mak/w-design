import * as React from "react";
import Card from "../Card";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;
Container.displayName = "PopoverContainer";

const Bubble = styled.div`
  left: 50%;
  opacity: 1;
  padding: 0.4rem;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.2s;
  width: 320px;
  z-index: 300;
`;
Bubble.displayName = "PopoverBubble";

export interface Popover {
  children: React.ReactNode;
}

const Popover: React.FC<Popover> = ({ children }) => {
  return (
    <Container>
      {children}
      <Bubble>
        <Card>Content</Card>
      </Bubble>
    </Container>
  );
};

export default Popover;
