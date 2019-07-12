import * as React from "react";
import { Button, ButtonGroup, Modal } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const { useState } = React;

const api = `
### API

| Props       | type                                           | default | description                                |
| ----------- | ---------------------------------------------- | ------- | ------------------------------------------ |
| onClose     | (e: React.SyntheticEvent<HTMLElement>) => void |         | on close modal event                       |
| modalTitle  | string                                         |         |                                            |
| modalBody   | ReactChild                                     |         | Main content of the modal                  |
| modalFooter | ReactChild                                     |         | Where we can put the actions or modal info |
| size        | string                                         | "md"    | Size of modal                              |
`;

const ModalPage: React.FunctionComponent<any> = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <h1>Modal</h1>
      <p>Useful for pop-up, message confirmation dialog</p>
      <p />

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

      <CodeBlock
        exampleCode={`const BasicModal = () => {
  const [isOpen, setOpen] = useState(false);

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
};`}
      />
      <p />
      <ReactMarkdown source={api} />
    </>
  );
};

export default ModalPage;
