import styled, { css } from "styled-components";
import { hex2Rgba } from "../../../common/styleUtils/utils";

export const MenuStyle = css`
  list-style: none;
  margin: 0;
  padding: 0 0.4rem;
  font-family: ${props => props.theme.fonts["normal"]};
  color: ${props => props.theme.colors["N70"]};
  min-width: 180px;
  transform: translateY(0.2rem);
`;

export const MenuItemStyle = css`
  margin-top: 0;
  padding: 0.2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  border-radius: ${props => props.theme.radii[1]};
  &:hover {
    background-color: ${props => hex2Rgba(props.theme.colors["B5"], 0.3)};
    color: ${props => props.theme.colors["B60"]};
  }

  a {
    padding: 0.2rem;
    width: 100%;
    color: ${props => props.theme.colors["N50"]};
    &:hover {
      text-decoration: none;
      color: ${props => props.theme.colors["B60"]};
    }
  }
`;

export const MenuItemAfter = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
`;
MenuItemAfter.displayName = "AfterItem";

export const IconBefore = styled.span`
  display: inline;
  color: ${props => props.theme.colors["N30"]};
  margin: 0 0.4rem;
`;
IconBefore.displayName = "IconBefore";
