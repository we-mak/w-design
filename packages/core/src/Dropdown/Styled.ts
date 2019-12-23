import styled from "styled-components";

export const Title = styled.span`
  align-self: center;
  display: inline-flex;
  flex-wrap: nowrap;
  max-width: 100%;
  line-height: 1.2;
`;
Title.displayName = "Title";

export const DropdownWrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
`;
DropdownWrapper.displayName = "DropdownWrapper";
