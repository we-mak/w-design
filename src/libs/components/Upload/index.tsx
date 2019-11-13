/**
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * Upload
 * Simple upload file
 */

// TODO:
//  Handle abort upload
// Handle response upload info & status

import React, { FC, useState, memo, useEffect } from "react";
import PushMessage from "../PushMessage";
import { FileList } from "./FileList";
import { UploadContainer, UploadLabel, UploadInput } from "./Styled";
import { UploadProps, UploadFileType } from "./types";
import { PushMessageProps } from "../PushMessage/types";
import { setUid } from "../../../common/helpers";
import { fileToObject, getFileItem } from "./utils";

const dummyThumb =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OCIgaGVpZ2h0PSI1OCIgdmlld0JveD0iMCAwIDU4IDU4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjU4IiBoZWlnaHQ9IjU4IiBmaWxsPSIjRDhEOEQ4IiBmaWxsLW9wYWNpdHk9Ii4xIi8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcgMSkiPgogICAgICA8cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNMzAuOTg1LDAgTDEuOTYzLDAgQzEuMTU1LDAgMC41LDAuNjU1IDAuNSwxLjkyNiBMMC41LDU1IEMwLjUsNTUuMzQ1IDEuMTU1LDU2IDEuOTYzLDU2IEw0Mi4wMzcsNTYgQzQyLjg0NSw1NiA0My41LDU1LjM0NSA0My41LDU1IEw0My41LDEyLjk3OCBDNDMuNSwxMi4yODIgNDMuNDA3LDEyLjA1OCA0My4yNDMsMTEuODkzIEwzMS42MDcsMC4yNTcgQzMxLjQ0MiwwLjA5MyAzMS4yMTgsMCAzMC45ODUsMCBaIi8+CiAgICAgIDxwb2x5Z29uIGZpbGw9IiNENUQ1RDUiIHBvaW50cz0iMzEuNSAuMTUxIDMxLjUgMTIgNDMuMzQ5IDEyIi8+CiAgICAgIDxwYXRoIGZpbGw9IiMzRkIwRTQiIGQ9Ik0xMi41IDEzTDYuNSAxM0M1Ljk0OCAxMyA1LjUgMTIuNTUyIDUuNSAxMiA1LjUgMTEuNDQ4IDUuOTQ4IDExIDYuNSAxMUwxMi41IDExQzEzLjA1MiAxMSAxMy41IDExLjQ0OCAxMy41IDEyIDEzLjUgMTIuNTUyIDEzLjA1MiAxMyAxMi41IDEzek0xNS41IDE4TDYuNSAxOEM1Ljk0OCAxOCA1LjUgMTcuNTUyIDUuNSAxNyA1LjUgMTYuNDQ4IDUuOTQ4IDE2IDYuNSAxNkwxNS41IDE2QzE2LjA1MiAxNiAxNi41IDE2LjQ0OCAxNi41IDE3IDE2LjUgMTcuNTUyIDE2LjA1MiAxOCAxNS41IDE4ek0xOS41IDE4QzE5LjI0IDE4IDE4Ljk4IDE3Ljg5IDE4Ljc5IDE3LjcxIDE4LjYxIDE3LjUyIDE4LjUgMTcuMjYgMTguNSAxNyAxOC41IDE2Ljc0IDE4LjYxIDE2LjQ4IDE4Ljc5IDE2LjI5IDE5LjE2IDE1LjkyIDE5Ljg0IDE1LjkyIDIwLjIxIDE2LjI5IDIwLjM5IDE2LjQ4IDIwLjUgMTYuNzQgMjAuNSAxNyAyMC41IDE3LjI2IDIwLjM5IDE3LjUyIDIwLjIxIDE3LjcxIDIwLjAyIDE3Ljg5IDE5Ljc2IDE4IDE5LjUgMTh6TTMxLjUgMThMMjMuNSAxOEMyMi45NDggMTggMjIuNSAxNy41NTIgMjIuNSAxNyAyMi41IDE2LjQ0OCAyMi45NDggMTYgMjMuNSAxNkwzMS41IDE2QzMyLjA1MiAxNiAzMi41IDE2LjQ0OCAzMi41IDE3IDMyLjUgMTcuNTUyIDMyLjA1MiAxOCAzMS41IDE4ek02LjUgMzNDNi4yNCAzMyA1Ljk4IDMyLjg5IDUuNzkgMzIuNzEgNS42MSAzMi41MiA1LjUgMzIuMjYgNS41IDMyIDUuNSAzMS43NCA1LjYxIDMxLjQ4IDUuNzkgMzEuMjkgNi4xNiAzMC45MiA2Ljg0IDMwLjkyIDcuMjEgMzEuMjkgNy4zOSAzMS40OCA3LjUgMzEuNzMgNy41IDMyIDcuNSAzMi4yNiA3LjM5IDMyLjUyIDcuMjEgMzIuNzEgNy4wMiAzMi44OSA2Ljc2IDMzIDYuNSAzM3pNMTguNSAzM0wxMC41IDMzQzkuOTQ4IDMzIDkuNSAzMi41NTIgOS41IDMyIDkuNSAzMS40NDggOS45NDggMzEgMTAuNSAzMUwxOC41IDMxQzE5LjA1MiAzMSAxOS41IDMxLjQ0OCAxOS41IDMyIDE5LjUgMzIuNTUyIDE5LjA1MiAzMyAxOC41IDMzek0zNy41IDE4TDM1LjUgMThDMzQuOTQ4IDE4IDM0LjUgMTcuNTUyIDM0LjUgMTcgMzQuNSAxNi40NDggMzQuOTQ4IDE2IDM1LjUgMTZMMzcuNSAxNkMzOC4wNTIgMTYgMzguNSAxNi40NDggMzguNSAxNyAzOC41IDE3LjU1MiAzOC4wNTIgMTggMzcuNSAxOHpNMjguNSAyM0w2LjUgMjNDNS45NDggMjMgNS41IDIyLjU1MiA1LjUgMjIgNS41IDIxLjQ0OCA1Ljk0OCAyMSA2LjUgMjFMMjguNSAyMUMyOS4wNTIgMjEgMjkuNSAyMS40NDggMjkuNSAyMiAyOS41IDIyLjU1MiAyOS4wNTIgMjMgMjguNSAyM3pNMzcuNSAyM0wzMS41IDIzQzMwLjk0OCAyMyAzMC41IDIyLjU1MiAzMC41IDIyIDMwLjUgMjEuNDQ4IDMwLjk0OCAyMSAzMS41IDIxTDM3LjUgMjFDMzguMDUyIDIxIDM4LjUgMjEuNDQ4IDM4LjUgMjIgMzguNSAyMi41NTIgMzguMDUyIDIzIDM3LjUgMjN6TTEwLjUgMjhMNi41IDI4QzUuOTQ4IDI4IDUuNSAyNy41NTIgNS41IDI3IDUuNSAyNi40NDggNS45NDggMjYgNi41IDI2TDEwLjUgMjZDMTEuMDUyIDI2IDExLjUgMjYuNDQ4IDExLjUgMjcgMTEuNSAyNy41NTIgMTEuMDUyIDI4IDEwLjUgMjh6TTI0LjUgMjhMMTQuNSAyOEMxMy45NDggMjggMTMuNSAyNy41NTIgMTMuNSAyNyAxMy41IDI2LjQ0OCAxMy45NDggMjYgMTQuNSAyNkwyNC41IDI2QzI1LjA1MiAyNiAyNS41IDI2LjQ0OCAyNS41IDI3IDI1LjUgMjcuNTUyIDI1LjA1MiAyOCAyNC41IDI4ek0zNy41IDI4TDI4LjUgMjhDMjcuOTQ4IDI4IDI3LjUgMjcuNTUyIDI3LjUgMjcgMjcuNSAyNi40NDggMjcuOTQ4IDI2IDI4LjUgMjZMMzcuNSAyNkMzOC4wNTIgMjYgMzguNSAyNi40NDggMzguNSAyNyAzOC41IDI3LjU1MiAzOC4wNTIgMjggMzcuNSAyOHoiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=";

const Upload: FC<UploadProps> = ({
  label = "+ Add file",
  uploadType = "textName",
  multiple = false,
  accept,
  disabled,
  showFileList = true,
  defaultFileList = [],
  beforeUpload,
  requestUpload
}) => {
  const [fileList, setFileList] = useState(defaultFileList);
  const [uploadFeedbackStatus, setUploadFeedbackStatus] = useState<PushMessageProps>();

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

  // Handle upload file: Use onchange event
  const handleUploadFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawfiles = Array.prototype.slice.call(e.target.files);
    let files: UploadFileType[] = [];

    if (rawfiles && rawfiles.length >= 0) {
      rawfiles.forEach(file => {
        const reader: FileReader = new FileReader();
        // Check load status error/success on local, preview file info
        reader.onerror = localErrorHandler;
        // Handle upload
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
              uid: setUid("file"),
              percent: 0
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

  useEffect(() => {
    if (fileList.length > 0) {
      fileList.forEach(file => {
        // beforeUpload: Check file types allowed,... anything before upload execute from props (if any)
        if (beforeUpload) {
          const before = beforeUpload(file, fileList);

          if (before && before.then) {
            before
              .then((processedFile: FormDataEntryValue) => {
                // transform file to something
                // such as add water mark
                const processedFileType = Object.prototype.toString.call(processedFile);

                if (
                  processedFileType === "[object File]" ||
                  processedFileType === "[object Blob]"
                ) {
                  const newFile = Object.assign({ ...file }, { data: processedFileType });
                  return post(newFile);
                }
                return post(file);
              })
              .catch((err: any) => {
                console && console.log(err);
              });
          } else if (before !== false) {
            return setTimeout(() => post(file), 0);
          }
        }

        // return without before upload
        return setTimeout(() => post(file), 0);
      });
    }
  }, [fileList]);

  const post = async (file: UploadFileType): Promise<void> => {
    const fileInFileList = getFileItem(file, fileList);
    console.log(fileInFileList);

    const { method, endpoint, headers, ignoreCache } = requestUpload;

    try {
      const result = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let requestMethod = "POST";
        if (method) {
          requestMethod = method;
        }
        xhr.open(requestMethod, endpoint, true);
        if (headers) {
          Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
        }
        if (ignoreCache) {
          xhr.setRequestHeader("Cache-Control", "no-cache");
        }
        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            return resolve(xhr.response);
          } else {
            return reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };

        xhr.onerror = function() {
          return reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.upload.onprogress = function(e) {
          if (e.lengthComputable) {
            console.log(Math.round((e.loaded / e.total) * 100));
          }
        };
        let finalFile = new FormData();
        finalFile.append("file", file.data);
        xhr.send(finalFile);
      });

      console.log("uploaded", result);
    } catch (err) {
      console.error("there was an error!", err);
      // return setFileList(
      //   fileList.map(item =>
      //     item.uid === fileInFileList.uid ? { ...item, status: "error" } : item
      //   )
      // );
    }
  };

  console.log(fileList);

  return (
    <>
      <UploadContainer uploadType={uploadType} requestUpload={requestUpload}>
        {uploadFeedbackStatus && <PushMessage messages={[uploadFeedbackStatus]} />}
        <UploadLabel>
          <span>{label}</span>
          <UploadInput
            type="file"
            name="file"
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
      showFileList && fileList.length > 0 && (
        <FileList fileList={fileList} rowKey={item => item.uid} />
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
