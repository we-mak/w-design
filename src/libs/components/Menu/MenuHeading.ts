/**
 * Menu Heading
 * */
import styled from 'styled-components'

export const MenuHeading = styled.li`
  flex-grow: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.5;
  padding: 0 0.2rem;
  margin: 0.2rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors["N20"]};
`;
MenuHeading.displayName = "MenuHeading";