import React, { FC, ReactChild } from "react";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";
import { Message, CommentContainer } from "./Styled";
import { GlobProps } from "../common/props";

export interface CommentProps extends GlobProps {
  message: string | React.ReactNode;
  time?: string;
  userName?: string | ReactChild;
  alt?: string;
  avatarSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  avatarUrl?: string;
  actions?: ReactChild | ReactChild[]; // Comment actions
  editEditor?: ReactChild; // edit comment Editor
  children?: any;
  style?: Object;
}

const Comment: FC<CommentProps> = ({
  time,
  avatarSize,
  avatarUrl,
  userName,
  alt,
  message,
  editEditor,
  actions,
  children,
  ...rest
}) => {
  return (
    <CommentContainer {...rest}>
      <AvatarGroup
        avatar={<Avatar size={avatarSize} avatarUrl={avatarUrl} alt={alt}></Avatar>}
        name={userName}
        description={
          <>
            <time>{time}</time>
            {editEditor ? (
              editEditor
            ) : typeof message === "string" ? (
              <Message
                dangerouslySetInnerHTML={{
                  __html: message
                }}
              ></Message>
            ) : (
              <Message>{message}</Message>
            )}
            {actions}
            {children}
          </>
        }
      ></AvatarGroup>
    </CommentContainer>
  );
};

export default Comment;
