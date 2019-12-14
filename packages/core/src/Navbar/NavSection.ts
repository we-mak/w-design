import styled from "styled-components";
import { display } from "styled-system";
import { NavProps } from "./";

export const NavSection = styled.section<NavProps>`
  align-items: center;
  display: flex;
  flex: 1 0 0;
  &:not(:first-child):last-child {
    justify-content: flex-end;
  }

  ${display}
`;

NavSection.displayName = "Section";
