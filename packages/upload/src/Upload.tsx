/**
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * Upload
 * Simple upload file
 */
import React, { FC, useState, memo, ReactNode } from "react";
import styled from "styled-components";
import { PushMessage } from "@w-design/core";
import { PushMessageProps } from "@w-design/core/lib/types/PushMessage";
import { setUid } from "@w-design/helpers";
import { FileList } from "./FileList";
import { fileToObject, getFileItem, updateFileState } from "./utils";
import { UploadFileType, UploadListProps } from "./FileList";
import dummyThumb from "./dummyThumb";
import { getUploadContainStyle } from "./getStyled";

const Container = styled.div`
  ${getUploadContainStyle};
`;

const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  text-align: center;
  position: relative;
  display: block;
  padding: 0.4rem;
  cursor: pointer;
  span {
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
`;

export type RequestUploadType = {
  endpoint: string;
  method: "POST" | "PUT" | "post" | "put"; // request method
  headers?: { [key: string]: string }; // Fetch api headers interface
  timeout?: number;
  withCredentials?: boolean;
  ignoreCache?: boolean;
  // body?: any;
};

// Type of button
export type UploadTypeProps = "textName" | "avatar";

export interface UploadChangeParam<T extends object = UploadFileType> {
  file: T;
  fileList: UploadFileType[];
  event?: { percent: number };
}

export interface UploadProps extends UploadListProps {
  /* Accept input attribute*/
  accept?: string;
  /* upload type: file name in text or picture*/
  uploadType?: UploadTypeProps;
  /* allow upload multiple files*/
  multiple?: boolean;
  /* Label title under Label tag*/
  label?: string | ReactNode;
  /* default file list */
  defaultFileList?: UploadFileType[];
  /* Function to executed before upload. If `false` the upload will be reject */
  beforeUpload?: (file: UploadFileType, fileList: UploadFileType[]) => boolean | Promise<any>;
  /* restApi request upload use fetch Api*/
  requestUpload: RequestUploadType;
  /* modified onchange behavior*/
  onChange?: (uploadInfo: UploadChangeParam) => void;
  /* disable input */
  disabled?: boolean;
  /* remove or abort upload*/
  onRemove?: (file: UploadFileType) => void | boolean | Promise<void | boolean>;
}

const Upload: FC<UploadProps> = ({
  label = "+ Add file",
  uploadType = "textName",
  multiple = false,
  accept,
  disabled,
  defaultFileList = [],
  beforeUpload,
  requestUpload
}) => {
  const [fileList, setFileList] = useState(defaultFileList);
  const [uploadFeedbackStatus, setUploadFeedbackStatus] = useState<PushMessageProps>();

  // only allow single upload for avatar
  if (uploadType === "avatar") {
    multiple = false;
  }

  // Handle error from local reading file
  function localErrorHandler(this: FileReader, event: any) {
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

  // Resolve file change before upload to server
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: UploadFileType[] = [];
    const rawfiles = Array.prototype.slice.call(e.target.files);

    if (rawfiles && rawfiles.length >= 0) {
      rawfiles.forEach(file => {
        const reader: FileReader = new FileReader();
        // Check load status error/success on local, preview file info
        reader.onerror = localErrorHandler;
        reader.onload = (f => {
          return (e: ProgressEvent<any>) => {
            // handle preview image from local url
            let source: string;
            const { result } = e.target;

            if (!f.type.match("image.*")) {
              source = dummyThumb;
            } else {
              source = result;
            }

            // transform file object
            let transformedFile = {
              ...fileToObject(f),
              source,
              data: f,
              uid: setUid("file")
            };

            files = [...files, transformedFile];
            // update file list
            return setFileList([...fileList, ...files]);
          };
        })(file);
        // Read in the file as a data URL.
        reader.readAsDataURL(file);
      });
    }
  };

  const handleFileUpload = (file: UploadFileType) => {
    // beforeUpload: Check file types allowed,... anything before upload execute from props (if any)
    if (beforeUpload) {
      const before = beforeUpload(file, fileList);

      if (before && typeof before !== "boolean") {
        before
          .then((processedFile: FormDataEntryValue) => {
            // transform file to something
            // such as add water mark
            const processedFileType = Object.prototype.toString.call(processedFile);

            if (processedFileType === "[object File]" || processedFileType === "[object Blob]") {
              const newFile = Object.assign(file, {
                data: processedFileType
              });
              return post(newFile);
            }
            return post(file);
          })
          .catch((err: any) => {
            console && console.error(err);
          });
      } else if (before !== false) {
        return post(file);
      }
    }

    // return without before upload
    return post(file);
  };

  const handleUploadCancel = (file: UploadFileType) => {
    // if upload is in progress: handle abort event
    if (file.status === "progress") {
      const newFileList = updateFileState(file, fileList, {
        status: "error"
      });

      setFileList(newFileList);

      // return xhr.abort();
    }

    const fileInFileList = getFileItem(file, fileList);
    return setFileList(fileList.filter(item => fileInFileList != item));
  };

  const post = async (file: UploadFileType): Promise<void> => {
    const xhr = new XMLHttpRequest();
    // set default method is "POST"
    const { method = "POST", endpoint, headers, ignoreCache } = requestUpload;

    try {
      const result = await new Promise((resolve, reject) => {
        xhr.open(method, endpoint, true);

        if (headers) {
          Object.keys(headers).forEach(key => xhr!.setRequestHeader(key, headers[key]));
        }
        if (ignoreCache) {
          xhr.setRequestHeader("Cache-Control", "no-cache");
        }

        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            return resolve(xhr!.response);
          } else {
            return reject({
              status: this.status,
              statusText: xhr!.statusText
            });
          }
        };

        xhr.onloadstart = function() {
          const newFileList = updateFileState(file, fileList, {
            status: "progress"
          });
          setFileList(newFileList);
        };

        xhr.onerror = function() {
          return reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };

        xhr.upload.onprogress = function(e) {
          let percentLoaded = 0;

          if (e.lengthComputable) {
            percentLoaded = Math.round((e.loaded / e.total) * 100);
          }

          const newFileList = updateFileState(file, fileList, {
            percent: percentLoaded
          });
          setFileList(newFileList);
        };

        let finalFile = new FormData();
        finalFile.append("file", file.data);
        xhr!.send(finalFile);
      });

      const newFileList = updateFileState(file, fileList, {
        status: "success",
        response: result
      });
      setFileList(newFileList);
    } catch (err) {
      const newFileList = updateFileState(file, fileList, {
        status: "error",
        response: err
      });
      setFileList(newFileList);
    }
  };

  return (
    <>
      <Container uploadType={uploadType} requestUpload={requestUpload}>
        {uploadFeedbackStatus && <PushMessage messages={[uploadFeedbackStatus]} />}
        <Label>
          <span>{label}</span>
          <Input
            type="file"
            name="file"
            accept={accept}
            multiple={multiple}
            onChange={handleFilesChange}
            disabled={disabled}
          />
        </Label>
      </Container>
      {/**
       * show file list
       * only show file list if list length > 0 or uploadType = picture
       */
      uploadType !== "avatar" && fileList.length > 0 && (
        <FileList
          fileList={fileList}
          rowKey={item => item.uid}
          onUpload={handleFileUpload}
          onCancel={handleUploadCancel}
        />
      )}
    </>
  );
};

export default memo(Upload);

// it('changes image url', async () => {
//   const { getByTestId } = render(<ImageUploader {...props} />);
//   const inputEl = getByTestId('input-image') as HTMLInputElement;
//   const file = new File(['(⌐□_□)'], 'chucknorris.png', {
//     type: 'image/png',
//   });
//   fireEvent.change(inputEl, { target: { files: [file] } });
//   const newImage = await waitForElement(() =>
//     getByTestId('new-image-wrapper')
//   );
//   expect(
//     newImage.querySelector('.avatar-crop img')!.getAttribute('src')
//   ).toContain('data:image/png;base64');
// });
