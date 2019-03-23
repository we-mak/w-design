import React from "react";
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

const Modal = (props: ModalProps) => {
  const { onClose, modalTitle, modalBody, modalFooter, size = "medium", ...rest } = props;

  // Main root layout selecting
  const documentBody: any = document.body;

  // Get body scroll position
  const getBodyPosition = () => documentBody.getBoundingClientRect().top;
  // Get scroll position
  const scrollPosition = getBodyPosition();

  const yPosition = documentBody.getBoundingClientRect().y;

  React.useEffect(() => {
    if (!documentBody.position) {
      // Prevent main layout scroll to top on open modal
      documentBody.style = `
        top: ${scrollPosition}px;
        position: fixed;
        width: 100%;
      `;

      if (yPosition < 0) {
        documentBody.style.paddingRight = "15px";
      }
    }

    return () => {
      // Remove style attribute
      documentBody.removeAttribute("style");
      // Set scroll position
      window.scrollBy(0, -scrollPosition);
    };
  });

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
