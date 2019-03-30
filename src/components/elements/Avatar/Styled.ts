import styled from "styled-components";
import { AvatarProps } from "./types";

export const AvatarWrapper = styled.figure<AvatarProps>`
  background: #5755d9;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.85);
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: 300;
  height: 1.6rem;
  width: 1.6rem;
  line-height: 1.25;
  margin: 0;
  position: relative;
  vertical-align: middle;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
`;
