import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[2]}px;
  }
`;
