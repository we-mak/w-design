import * as React from "react";
import { disableBodyScroll, clearAllBodyScrollLocks, BodyScrollOptions } from "body-scroll-lock";
import Portal from "../../elements/Portal";
import Typo from "../../elements/Typo";
import Button from "../../elements/Button";
import {
  WModal,
  ModalContainer,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "./Styled";
import { ModalProps } from "./types";

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
      <WModal {...rest}>
        <ModalOverlay onClick={onClose} />

        <ModalContainer size={size}>
          <ModalHeader>
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
          </ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
          {modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
        </ModalContainer>
      </WModal>
    </Portal>
  );
};

export default Modal;
