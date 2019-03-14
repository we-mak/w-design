import React from "react";
import Portal from "../../elements/Portal";
import Typo from "../../elements/Typo";
import Button from "../../elements/Button";
import { WModal, ModalContainer, ModalOverlay, ModalBody, ModalHeader } from "./Styled";
import { ModalProps } from "./types";

const Modal = (props: ModalProps) => {
  // Main layout selecting
  const mainLayout: any = document.getElementById(props.rootID);
  // Get body scroll position
  const getBodyPosition = () => document.body.getBoundingClientRect().top;

  const { onClose, clickOverlayToClose, modalTitle, modalBody, size = "medium", ...rest } = props;
  // Get scroll position
  const scrollPosition = getBodyPosition();

  React.useEffect(() => {
    if (!mainLayout.position) {
      // Prevent main layout scroll to top on open modal
      mainLayout.style = `
        top: ${scrollPosition}px;
        position: fixed;
      `;
      // padding-right: 15px;
    }
    return () => {
      // Remove style attribute
      mainLayout.removeAttribute("style");
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
          {/* Todo: modal footer */}
        </ModalContainer>
      </WModal>
    </Portal>
  );
};

export default Modal;
