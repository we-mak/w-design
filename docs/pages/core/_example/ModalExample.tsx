import * as React from "react";
import { Button, ButtonGroup, Modal } from "@w-design/core";

const ModalExample = () => {
  const [isOpen, setOpen] = React.useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>

      {isOpen && (
        <Modal
          onClose={closeModal}
          modalTitle="Modal title"
          modalBody={<div>Here is the modal content</div>}
          modalFooter={
            <ButtonGroup>
              <Button appearance="primary">Submit action</Button>
              <Button appearance="subtle" onClick={closeModal}>
                Cancel
              </Button>
            </ButtonGroup>
          }
        />
      )}
    </>
  );
};

export default ModalExample;
