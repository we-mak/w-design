import styled from "styled-components";

export const UploadContainer = styled.div`
  position: relative;
  background: ${props => props.theme.colors["N1"]};
  border: 1px dashed ${props => props.theme.colors["N30"]};
  color: ${props => props.theme.colors["N30"]};
  overflow: hidden;
  width: 120px;
  height: 120px;
  margin: 0.4rem 0;
  &:hover {
    border: 1px dashed ${props => props.theme.colors["B50"]};
  }
`;
UploadContainer.displayName = "UploadContainer";

export const UploadLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  text-align: center;
  cursor: pointer;
  span {
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
UploadLabel.displayName = "UploadLabel";

export const UploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
`;
UploadInput.displayName = "UploadInput";
