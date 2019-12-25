import styled from "styled-components";

export const TabsList = styled.div`
  position: relative;
`;

export const Tab = styled.button`
  padding: 1em;
  border-bottom: 1px solid ${props => props.theme.colors["N10"]};
`;

export const TabContent = styled.div`
  margin-top: 1em;
`;
