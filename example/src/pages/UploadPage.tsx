import * as React from "react";
import { Typo, Container, Upload } from "w-design";

const Example = () => {
  return (
    <Container>
      <Upload width={250} />
      <br />
      <Upload uploadType="picture" accept="image/*" />
    </Container>
  );
};

const ProgressPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">Upload</Typo>
    Upload file or image. Support AJAX upload via <code>XMLHttpRequest</code>.
    <Typo appearance="h3">Example</Typo>
    <Example />
  </>
);

export default ProgressPage;
