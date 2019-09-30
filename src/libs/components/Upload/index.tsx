import React, { FC, useState, useEffect, memo } from "react";
import PushMessage from "../PushMessage";
import { UploadContainer, UploadLabel, UploadInput } from "./Styled";
import { UploadProps } from "./types";

//https://www.html5rocks.com/en/tutorials/file/dndfiles/

const Upload: FC<UploadProps> = ({ label = "+ Add image", multiple = false }) => {
  const [beforeUploadErr, setBeforUploadError] = useState("");

  useEffect(() => {
    // handle upload remove upload error message
    const timer = setTimeout(() => setBeforUploadError(""), 3000);
    return () => clearTimeout(timer);
  });

  // handle error
  const errorHandler = (e: any) => {
    switch (e.target.error.code) {
      case e.target.error.NOT_FOUND_ERR:
        setBeforUploadError("File Not Found!");
        break;
      case e.target.error.NOT_READABLE_ERR:
        setBeforUploadError("File is not readable");
        break;
      case e.target.error.ABORT_ERR:
        break; // noop
      default:
        setBeforUploadError("An error occurred reading this file.");
    }
  };

  // Handle start to upload image
  const startUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;

    // Read client file
    if (files && files.length >= 0) {
      for (let i = 0, file: File; (file = files[i]); i++) {
        // Only process image files.
        if (!file.type.match("image.*")) {
          return setBeforUploadError("Only image is allowed");
        }
        const reader = new FileReader();
        // hadling error
        reader.onerror = errorHandler;

        reader.onload = (f => {
          return (e: ProgressEvent) => {
            console.log(e, f);
          };
        })(file);
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <UploadContainer>
      {beforeUploadErr && (
        <PushMessage messages={[{ value: beforeUploadErr, appearance: "error" }]} />
      )}
      <UploadLabel>
        <span>{label}</span>
        <UploadInput type="file" multiple={multiple} onChange={startUpload} />
      </UploadLabel>
    </UploadContainer>
  );
};

export default memo(Upload);
