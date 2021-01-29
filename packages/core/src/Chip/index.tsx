import * as React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import Button from "../Button";

const Container = styled.span`
  align-items: center;
  background-color: ${(props) => props.theme.colors["N3"]};
  color: ${(props) => props.theme.colors["N70"]};
  border-radius: 4rem;
  display: inline-flex;
  font-size: 90%;
  height: ${(props) => props.theme.height["sm"]};
  margin: 0.1rem;
  line-height: 0.8rem;
  max-width: 320px;
  overflow: hidden;
  padding: ${(props) => props.theme.padding["md"]};
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;

  figure {
    margin-left: -0.4rem;
    margin-right: 0.4rem;
  }

  button {
    border-radius: 50%;
    font-size: x-large;
    margin-right: -0.4rem;
    margin-left: 0.4rem;
    line-height: 0.8rem;
  }
`;

export interface Chip {
  children: React.ReactNode;
  onDismiss?: () => void;
  avatar?: string;
}

function Chip({ children, onDismiss, avatar }: Chip) {
  return (
    <Container>
      {avatar && <Avatar size="xs" avatarUrl={avatar} />}
      {children}
      {onDismiss && (
        <Button
          appearance="clean"
          size="sm"
          onClick={onDismiss}
          ariaLabel="Close Chip"
          role="button"
        >
          &times;
        </Button>
      )}
    </Container>
  );
}

export default Chip;
