import { Upload } from "@w-design/upload";

const PictureUpload = () => {
  return (
    <Upload
      isPictureCard
      requestUpload={{
        endpoint: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        method: "POST",
        headers: {
          authorization: "authorization-text",
        },
      }}
    />
  );
};

export default PictureUpload;
