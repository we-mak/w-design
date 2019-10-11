/**
 * Upload
 * Simple upload file and image
 * Inspired by:
 * - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 * - https://ant.design/components/upload/
 *
 */
import React, { FC, useState, memo } from "react";
import PushMessage from "../PushMessage";
import { FileList } from "./FileList";
import { UploadContainer, UploadLabel, UploadInput } from "./Styled";
import { UploadProps } from "./types";
import { PushMessageProps } from "../PushMessage/types";
import { setUid } from "../../../common/helpers";
import { fileToObject } from "./utils";

const Upload: FC<UploadProps> = ({
  label = "+ Add file",
  uploadType = "textName",
  multiple = false,
  accept,
  disabled,
  showFileList = true,
  defaultFileList = [],
  beforeUpload
}) => {
  const [fileList, setFileList] = useState(defaultFileList);
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
      rawfiles.forEach(file => {
        const reader: FileReader = new FileReader();
        reader.onerror = errorHandler;

        reader.onload = (f => {
          // update custom file object
          f.uid = setUid("file");
          f.percent = 0;
          const parsedFile = fileToObject(f);

          return async (e: ProgressEvent<any>) => {
            // handle preview image from local url
            console.log(e.target);
            const { result } = e.target;

            if (!beforeUpload) {
              // return upload imediately
            }

            // update file list
            setFileList([...fileList, { ...parsedFile, thumbUrl: result }]);
          };
        })(file);

        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
      });
    }
  };

  console.log(fileList);

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
      {/**
       * show file list
       * only show file list if list length > 0 or showFileList prop = false
       */
      showFileList && fileList.length > 0 && <FileList fileList={fileList} />}
    </>
  );
};

export default memo(Upload);

// if (file.type.match("image.*")) {
//   // preview image
// }
