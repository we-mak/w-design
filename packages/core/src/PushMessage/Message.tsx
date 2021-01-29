import * as React from "react";
import styled from "styled-components";
import { slideDown } from "@w-design/helpers";
import Icon from "../Icon";
import { MessageType } from "./index";

const Panel = styled.div`
  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 0.2rem;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadows[1]};
  width: fit-content;
  max-width: 320px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${slideDown} 0.25s ease;
`;

const Message = ({ value, appearance = "info" }: MessageType) => {
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

  return (
    <Panel>
      <Icon className={iconName}></Icon>
      &nbsp;
      {value}
    </Panel>
  );
};

export default Message;
