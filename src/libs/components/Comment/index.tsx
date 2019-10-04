import React, { FC } from "react";
import Avatar from "../../elements/Avatar";
import AvatarGroup from "../AvatarGroup";
import { CommentProps } from "./types";
import { Message, CommentContainer } from "./Styled";

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
            ) : (
              <Message
                dangerouslySetInnerHTML={{
                  __html: message
                }}
              ></Message>
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
