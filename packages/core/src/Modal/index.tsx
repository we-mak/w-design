import * as React from "react";
import styled from "styled-components";
import { disableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from "body-scroll-lock";
import Button from "../Button";
import Typo from "../Typo";
import Portal from "../Portal";
import { ModalContainer } from "./ModalContainer";
import { GlobProps, SyntheticEventProps, MouseEventProps } from "../common/props";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  padding: ${props => `${props.theme.space[0]}px`};
  overflow-y: scroll;
  padding-right: 0 !important;
  width: 100% !important;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  z-index: 1000;
  .close-btn {
    float: right;
  }
`;

const Header = styled.div`
  padding: ${props => `${props.theme.space[3]}px`};
  margin-top: ${props => `${props.theme.space[2]}px`};
`;

const Body = styled.div`
  overflow-y: auto;
  padding: ${props => `${props.theme.space[3]}px`};
  position: relative;
  margin-bottom: 1rem;
  max-width: 960px;
`;

const Overlay = styled.div`
  background: rgba(248, 249, 250, 0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const Footer = styled.div`
  padding: ${props => `${props.theme.space[3]}px`};
  text-align: right;
`;

export interface ModalContainerStyleProps {
  size?: "large" | "medium" | "small";
}

export interface ModalProps
  extends GlobProps,
    ModalContainerStyleProps,
    SyntheticEventProps,
    MouseEventProps {
  onClose: (e: React.SyntheticEvent<HTMLElement>) => void;
  modalTitle?: string;
  modalBody?: React.ReactNode;
  modalFooter?: React.ReactNode;
  children?: React.ReactNode;
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
};

const Modal = (props: ModalProps) => {
  const { onClose, modalTitle, modalBody, modalFooter, size = "medium", ...rest } = props;
  // Main root layout selecting
  const documentBody: Element = document.body;

  React.useEffect(() => {
    disableBodyScroll(documentBody, options);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Portal>
      <Wrapper {...rest}>
        <Overlay onClick={onClose} />

        <ModalContainer size={size}>
          <Header>
            <Button
              className="close-btn"
              iconBefore="fas fa-times"
              iconOnly
              appearance="clean"
              size="sm"
              onClick={onClose}
              data-testid="close"
            />
            <Typo tag="div" appearance="h5">
              {modalTitle}
            </Typo>
          </Header>
          <Body>{modalBody}</Body>
          {modalFooter && <Footer>{modalFooter}</Footer>}
        </ModalContainer>
      </Wrapper>
    </Portal>
  );
};

export default Modal;
