import styled, { keyframes } from "styled-components";

export const MessageContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  text-align: center;
  font-family: ${props => props.theme.fonts["normal"]};
  font-size: ${props => props.theme.fontSizes[0]};
  font-feature-settings: "tnum";
  font-variant: tabular-nums;
`;
MessageContainer.displayName = "MessageContainer";

// get this from animation
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1.6rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MessagePanel = styled.div`
  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 0.2rem;
  background-color: #fff;
  box-shadow: ${props => props.theme.shadows[1]};
  width: fit-content;
  max-width: 320px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${slideDown} 0.25s ease;
`;
