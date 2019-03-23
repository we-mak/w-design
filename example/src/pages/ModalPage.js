import React, { useState } from "react";
import { Button, ButtonGroup, Modal } from "w-design";
import ReactMarkdown from "react-markdown";
// import { CodeBlock } from "../components/CodeBlock";

const api = `
Useful for pop-up, message confirmation dialog

### API

| Props       | type                                           | default | description                                |
| ----------- | ---------------------------------------------- | ------- | ------------------------------------------ |
| onClose     | (e: React.SyntheticEvent<HTMLElement>) => void |         | on close modal event                       |
| modalTitle  | string                                         |         |                                            |
| modalBody   | ReactChild                                     |         | Main content of the modal                  |
| modalFooter | ReactChild                                     |         | Where we can put the actions or modal info |
| size        | string                                         | "md"    | Size of modal                              |
`;

const ModalPage = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <h1>Modal</h1>
      <ReactMarkdown source={api} />
      <br />
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

export default ModalPage;
