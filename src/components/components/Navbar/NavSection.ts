import styled from "styled-components";

export const NavSection = styled.section`
  align-items: center;
  display: flex;
  flex: 1 0 0;
  &:not(:first-child):last-child {
    justify-content: flex-end;
  }
`;

NavSection.displayName = "Section";
