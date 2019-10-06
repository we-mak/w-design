/**
 * Upload
 * Simple upload file and image
 * Inspired by:
 * - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 * - https://ant.design/components/upload/
 */
import React, { FC, useState, memo } from "react";
import PushMessage from "../PushMessage";
import { FileList } from "./FileList";
import { UploadContainer, UploadLabel, UploadInput } from "./Styled";
import { UploadProps } from "./types";
import { PushMessageProps } from "../PushMessage/types";
import { setUid } from "../../../common/helpers";

const Upload: FC<UploadProps> = ({
  label = "+ Add file",
  uploadType = "textName",
  multiple = false,
  accept,
  disabled
}) => {
  const [uploadFeedbackStatus, setUploadFeedbackStatus] = useState<PushMessageProps>();

  // Handle error from local reading file
  function errorHandler(this: FileReader, event: any) {
    const { error } = event;

    switch (error.code) {
      case error.NOT_FOUND_ERR:
        setUploadFeedbackStatus({
          value: "File Not Found!",
          appearance: "error"
        });
        break;
      case error.NOT_SUPPORTED_ERR:
        setUploadFeedbackStatus({
          value: "The operation is not supported",
          appearance: "error"
        });
        break;
      case error.ABORT_ERR:
        break; // noop
      default:
        setUploadFeedbackStatus({
          value: "An error occurred reading this file.",
          appearance: "error"
        });
    }
  }

  // Handle upload file: Use onchange event
  // 1. Parse file info into custom object with unique id
  // 2. Check load status error/success on local, preview file info
  // 3. Check file types allowed,... anything before upload execute from props (if any)
  // 4. Handle upload
  // 5. Handle response upload info & status
  const handleUploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawfiles = Array.prototype.slice.call(e.target.files);
    if (rawfiles && rawfiles.length >= 0) {
      for (let i = 0, file; (file = rawfiles[i]); i++) {
        // 1.
        file.uid = setUid("file");
        file.percent = 0;

        // 2.
        const reader: FileReader = new FileReader();
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
    <>
      <UploadContainer uploadType={uploadType}>
        {uploadFeedbackStatus && <PushMessage messages={[uploadFeedbackStatus]} />}
        <UploadLabel>
          <span>{label}</span>
          <UploadInput
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleUploadFiles}
            disabled={disabled}
          />
        </UploadLabel>
      </UploadContainer>
      <FileList />
    </>
  );
};

export default memo(Upload);

// if (file.type.match("image.*")) {
//   // preview image
// }
