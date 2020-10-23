import { Upload } from "@w-design/upload";

const MultiUpload = () => {
  return (
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
  );
};

export default MultiUpload;
