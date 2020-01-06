import React, { useState, useLayoutEffect, memo } from "react";
import styled from "styled-components";
import { slideDown } from "@w-design/helpers";
import Icon from "../Icon";
import { PushMessageProps } from "./index";

const Panel = styled.div`
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

const Message = ({ value, appearance = "info", dismissTimeout = 3000 }: PushMessageProps) => {
  const [isShowMessage, setShowMessage] = useState(true);

  useLayoutEffect(() => {
    // handle upload remove upload error message
    const timer = setTimeout(() => setShowMessage(false), dismissTimeout);
    return () => clearTimeout(timer);
  }, []);

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
    <Panel>
      <Icon className={iconName}></Icon>
      &nbsp;
      {value}
    </Panel>
  ) : (
    <></>
  );
};

export default memo(Message);
