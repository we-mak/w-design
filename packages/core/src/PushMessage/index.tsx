import * as React from "react";
import styled from "styled-components";
import Portal from "../Portal";
import Message from "./Message";

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: ${(props) => props.theme.fonts["normal"]};
  font-size: ${(props) => props.theme.fontSizes[0]};
  font-feature-settings: "tnum";
  font-variant: tabular-nums;
  pointer-events: none;
`;

export type PushMessageType = {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
};

export interface PushMessageProps {
  message?: PushMessageType;
  dismissTimeout?: number; // time to auto dismiss message automatically
}

const PushMessage = ({ message, dismissTimeout = 5000 }: PushMessageProps) => {
  const [messages, setMessages] = React.useState<PushMessageType[]>([]);

  const updateMessage = () => {
    if (message) {
      setMessages((currentMessages) => [message, ...currentMessages]);
      // auto dismiss
      if (messages.length >= 0) {
        setTimeout(() => {
          setMessages((current) => current.filter((m) => m !== message));
        }, dismissTimeout);
      }
    }
  };

  React.useEffect(() => {
    updateMessage();
    //  return () => clearTimeout(timer);
  }, [message]);

  return (
    <Portal>
      <Container>
        <div>
          {messages.length > 0 &&
            messages.map((m, i) => (
              <Message value={m.value} appearance={m.appearance} key={i} />
            ))}
        </div>
      </Container>
    </Portal>
  );
};

export default PushMessage;
