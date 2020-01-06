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
  margin: auto;
  text-align: center;
  font-family: ${props => props.theme.fonts["normal"]};
  font-size: ${props => props.theme.fontSizes[0]};
  font-feature-settings: "tnum";
  font-variant: tabular-nums;
`;

export interface PushMessageProps {
  value: string;
  appearance: "info" | "warn" | "success" | "error";
  dismissTimeout?: number; // time to auto dismiss message automatically
}

const PushMessage = ({ messages }: { messages: PushMessageProps[] }) => {
  // let messageNodes: React.ReactNode = [];

  // for (let i in messages) {
  //   messageNodes = <Message value={messages[i].value} appearance={messages[i].appearance} />;
  // }

  return (
    <Portal>
      <Container>
        {/* <div>{messageNodes}</div> */}
        <div>
          {messages.map((m, i) => (
            <Message value={m.value} appearance={m.appearance} key={i} />
          ))}
        </div>
      </Container>
    </Portal>
  );
};

export default PushMessage;
