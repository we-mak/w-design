import React, { ReactNode } from "react";
import Portal from "../Portal";
import { Message } from "./Message";
import { MessageContainer } from "./Styled";

export interface PushMessageProps {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
  dismissTimeout?: number; // time to auto dismiss message automatically
}

const PushMessage = ({ messages }: { messages: PushMessageProps[] }) => {
  let message: ReactNode;

  for (let i = 0; i < messages.length; i++) {
    message = (
      <Message value={messages[i].value} appearance={messages[i].appearance} />
    );
  }

  return (
    <Portal>
      <MessageContainer>
        <div>{message}</div>
      </MessageContainer>
    </Portal>
  );
};

export default PushMessage;
