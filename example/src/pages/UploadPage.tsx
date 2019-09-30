import * as React from "react";
import { Typo, Container, Upload } from "w-design";

const Example = () => {
  return (
    <Container>
      <Upload />
    </Container>
  );
};

const ProgressPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Upload</Typo>
    Upload file or image
    <Typo appearance="h3">Example</Typo>
    <Example />
  </>
);

export default ProgressPage;
