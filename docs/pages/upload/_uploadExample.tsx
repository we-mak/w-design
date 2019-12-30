import * as React from "react";
import { Container } from "@w-design/core";
import { Upload } from "@w-design/upload";

export default () => {
  return (
    <Container>
      <Upload
        multiple
        width={250}
        // beforeUpload={(file: any, fileList: any) => {
        //   console.log("before upload", file, fileList);
        //   return true;
        // }}

        requestUpload={{
          endpoint: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: {
            authorization: "authorization-text"
          }
        }}
      />
      <br />

      {/* <Upload
        uploadType="picture"
        accept="image/*"
        requestUpload={{
          endpoint: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: {
            authorization: "authorization-text"
          }
        }}
      /> */}
    </Container>
  );
};
