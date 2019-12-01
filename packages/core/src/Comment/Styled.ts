import styled from "styled-components";

export const Message = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors["N70"]};
`;

export const CommentContainer = styled.div`
  width: 100%;
  margin: 0.8rem 0;
`;
CommentContainer.displayName = "CommentContainer";
