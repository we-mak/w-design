import * as React from "react";
import { Container, Box } from "@w-design/core";
import { Upload } from "@w-design/upload";

export default () => {
  return (
    <Container>
      <Upload
        multiple
        requestUpload={{
          endpoint: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          method: "POST",
          headers: {
            authorization: "authorization-text"
          }
        }}
      />
      <Box m={20}></Box>
    </Container>
  );
};
