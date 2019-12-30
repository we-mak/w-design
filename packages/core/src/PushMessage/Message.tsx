import React, { useState, useEffect } from "react";
import Icon from "../Icon";
import { MessagePanel } from "./Styled";
import { PushMessageProps } from "./index";

// TODO: prevent rerendering

export const Message = ({
  value,
  appearance = "info",
  dismissTimeout = 3000
}: PushMessageProps) => {
  const [isShowMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // handle upload remove upload error message
    const timer = setTimeout(() => setShowMessage(false), dismissTimeout);
    return () => clearTimeout(timer);
  });

  let iconName = "fa fa-info-circle info";
  switch (appearance) {
    case "success":
      iconName = "fa fa-check-circle success";
      break;
    case "error":
      iconName = "fa fa-times error";
      break;
    case "warn":
      iconName = "fa fa-exclamation-triangle warn";
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
