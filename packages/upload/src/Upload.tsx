/**
 * Upload
 * Simple upload file
 */
import React, { useState, memo, ReactNode, useEffect } from "react";
import styled from "styled-components";
import { setUid } from "@w-design/helpers";
import { FileList } from "./FileList";
import { fileToObject, getFileItem, updateFileState, localErrorHandler } from "./utils";
import { UploadFileType, UploadListProps } from "./FileList";
import { RequestUploadType, xhrRequest } from "./xhrRequest";
//
import dummyThumb from "./dummyThumb";
import { getUploadContainStyle, labelStyle, inputStyle } from "./getStyled";

export interface UploadChangeParam<T extends object = UploadFileType> {
  file: T;
  fileList: UploadFileType[];
  event?: { percent: number };
}

export interface UploadProps extends UploadListProps {
  /* Accept input attribute*/
  accept?: string;
  /* allow upload multiple files*/
  multiple?: boolean;
  /* Label title under Label tag*/
  label?: string | ReactNode;
  /* default file list */
  defaultFileList?: UploadFileType[];
  /* Function to executed before upload. If `false` the upload will be reject */
  beforeUpload?: (file: UploadFileType, fileList?: UploadFileType[]) => boolean | Promise<any>;
  /* restApi request upload use fetch Api*/
  requestUpload: RequestUploadType;
  /* disable input */
  disabled?: boolean;
  /* modified onchange behavior*/
  onChange?: (uploadInfo: UploadChangeParam) => void;
  /* remove or abort upload*/
  onRemove?: (file: UploadFileType) => void | boolean | Promise<void | boolean>;
}

const Container = styled.div<UploadProps>`
  ${getUploadContainStyle};
`;

const Label = styled.label`
  ${labelStyle}
`;

const Input = styled.input`
  ${inputStyle}
`;

const Upload = ({
  label = "+ Add file",
  multiple = false,
  accept,
  disabled,
  defaultFileList = [],
  beforeUpload,
  requestUpload
}: UploadProps) => {
  const [fileList, setFileList] = useState(defaultFileList);

  // Resolve file change before upload to server
  const handleFilesChange = function(e: React.ChangeEvent<HTMLInputElement>) {
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

  // Handle trigger upload on click on upload button
  const handleFileUpload = (file: UploadFileType) => {
    // beforeUpload
    // Check file types allowed,... anything before upload execute from props (if any)
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

    return post(file);
  };

  const [xhr, setXhr] = useState<any>(undefined);

  useEffect(() => {
    if (!xhr) {
      setXhr(xhrRequest());
    }
  }, [xhr, xhrRequest]);

  const post = async (file: UploadFileType): Promise<void> => {
    if (xhr) {
      try {
        const result = await xhr.upload({
          ...requestUpload,
          file,
          onLoadStart: () => {
            const newFileList = updateFileState(file, fileList, {
              status: "progress"
            });
            setFileList(newFileList);
          },
          onProgress: (e: ProgressEvent<EventTarget>) => {
            let percentLoaded = 0;

            if (e.lengthComputable) {
              percentLoaded = Math.round((e.loaded / e.total) * 100);
            }

            const newFileList = updateFileState(file, fileList, {
              percent: percentLoaded
            });
            setFileList(newFileList);
          }
        });

        const newFileList = updateFileState(file, fileList, {
          status: "success",
          response: result
        });

        return setFileList(newFileList);
      } catch (err) {
        const newFileList = updateFileState(file, fileList, {
          status: "error",
          response: err
        });
        return setFileList(newFileList);
      }
    }
  };

  const handleUploadCancel = (file: UploadFileType) => {
    if (!xhr) return;
    // if upload is in progress: handle abort event
    if (file.status === "progress") {
      const newFileList = updateFileState(file, fileList, {
        status: "error"
      });
      setFileList(newFileList);
      return xhr && xhr.abort();
    }

    const fileInFileList = getFileItem(file, fileList);
    return setFileList(fileList.filter(item => fileInFileList != item));
  };

  return (
    <>
      <Container requestUpload={requestUpload}>
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

      {fileList.length > 0 && (
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
