import React, { FunctionComponent, useState, useEffect } from "react";
import Portal from "../../elements/Portal";
import Icon from "../../elements/Icon";
import { MessageContainer, MessagePanel } from "./Styled";
import { PushMessageProps, MessageProps } from "./types";

export const Message = ({ value, appearance = "info", dismissTimeout = 3000 }: MessageProps) => {
  const [isShowMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // handle upload remove upload error message
    const timer = setTimeout(() => setShowMessage(false), dismissTimeout);
    return () => clearTimeout(timer);
  });

  let iconName = "far fa-info-circle info";
  switch (appearance) {
    case "success":
      iconName = "far fa-check-circle success";
      break;
    case "error":
      iconName = "far fa-times error";
      break;
    case "warn":
      iconName = "far fa-info-circle warn";
      break;
  }

  return isShowMessage ? (
    <MessagePanel>
      <Icon className={iconName}></Icon>
      &nbsp;
      {value}
    </MessagePanel>
  ) : (
    <></>
  );
};

const PushMessage: FunctionComponent<PushMessageProps> = ({ messages = [] }) => {
  return (
    <Portal>
      <MessageContainer>
        <div>
          {messages.map((m, idx) => {
            return <Message value={m.value} appearance={m.appearance} key={idx} />;
          })}
        </div>
      </MessageContainer>
    </Portal>
  );
};

export default PushMessage;
