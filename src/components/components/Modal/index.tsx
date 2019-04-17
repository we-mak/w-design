import * as React from "react";
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

/** ts-lint disabled */

const Modal = (props: ModalProps) => {
  const { onClose, modalTitle, modalBody, modalFooter, size = "medium", ...rest } = props;

  React.useLayoutEffect(() => {
    // Get original body overflow
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";

    return () => {
      document.body.removeAttribute("style");
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
