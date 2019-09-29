import React, { FunctionComponent } from "react";
import Portal from "../../elements/Portal";
import { Message } from "./Message";
import { MessageContainer } from "./Styled";
import { PushMessageProps } from "./types";

const PushMessage: FunctionComponent<PushMessageProps> = ({ messages = [] }) => {
  return (
    <Portal>
      <MessageContainer>
        <div>
          {messages.map((m, idx) => {
            return (
              <Message
                value={m.value}
                appearance={m.appearance}
                dismissTimeout={m.dismissTimeout}
                key={idx}
              />
            );
          })}
        </div>
      </MessageContainer>
    </Portal>
  );
};

export default PushMessage;
