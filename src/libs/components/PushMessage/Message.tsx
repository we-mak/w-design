import React, { useState, useEffect } from "react";
import Icon from "../../elements/Icon";
import { MessagePanel } from "./Styled";
import { MessageProps } from "./types";

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
