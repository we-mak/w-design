import React, { useState } from "react";
import { Button, Modal } from "w-design";
import ReactMarkdown from "react-markdown";
// import { CodeBlock } from "../components/CodeBlock";

const api = `
### API

| Props | type | default | description |
| ----- | ---- | ------- | ----------- |
|       |      |         |             |
|       |      |         |             |
`;

const ModalPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <h1>Modal</h1>
      Useful for pop-up, message confirmation dialog
      <ReactMarkdown source={api} />
      <br />
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      {isOpen && (
        <Modal rootID="w" onClose={() => setOpen(false)} clickOverlayToClose>
          Here
        </Modal>
      )}
    </>
  );
};

export default ModalPage;
