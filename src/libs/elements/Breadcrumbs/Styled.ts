import styled from "styled-components";

export const BreadcrumbsContainer = styled.nav`
  color: ${props => props.theme.colors["N30"]};
  font-size: 0.6rem;
  display: flex;
  flex-wrap: wrap;
`;
BreadcrumbsContainer.displayName = "BreadcrumbsContainer";

export const BreadcrumbsItemWrapper = styled.div`
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
BreadcrumbsItemWrapper.displayName = "BreadcrumbsItemWrapper";

export const Seperator = styled.div`
  color: ${props => props.theme.colors["N30"]};
  flex-shrink: 0;
  text-align: center;
  padding: 0px 0.2rem;
`;
Seperator.displayName = "Seperator";
