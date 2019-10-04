import * as React from "react";
import { Typo, Container, ProgressLoader } from "w-design";

const Example = () => {
  return (
    <Container>
      <ProgressLoader percent={30} />
      <ProgressLoader percent={40} status="success" />
      <ProgressLoader percent={70} status="error" />
      <ProgressLoader percent={100} />

      <ProgressLoader percent={60} size="sm" />
    </Container>
  );
};

const ProgressPage: React.FunctionComponent<any> = () => (
  <>
    <Typo appearance="h1">ProgressLoader</Typo>
    Display progress status of any task that takes time to complete.
    <Typo appearance="h3">Example</Typo>
    <Example />
  </>
);

export default ProgressPage;
