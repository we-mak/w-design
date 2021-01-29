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

export type MessageType = {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
};

export interface PushMessage {
  message?: MessageType;
  dismissTimeout?: number; // time to auto dismiss message automatically
}

const PushMessage = ({ message, dismissTimeout = 3000 }: PushMessage) => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    let timer: number;
    if (message) {
      setMessages((currentMessages) => [message, ...currentMessages]);
      // auto dismiss
      timer = setTimeout(() => {
        setMessages((current) => current.filter((m) => m !== message));
      }, dismissTimeout);
    }

    // unmount when no messages
    if (messages.length < 0) {
      return () => clearTimeout(timer);
    }
    return;
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
