import styled from "styled-components";

export const BreadcrumbsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.2;
  height: 1.2rem;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0px;

  a {
    &:hover {
      text-decoration: underline;
      color: ${p => p.theme.colors["B50"]};
    }
  }
`;
