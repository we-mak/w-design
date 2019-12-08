import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  min-height: 0%;
`;

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
