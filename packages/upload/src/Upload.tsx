/**
 * Upload
 */
import * as React from "react";
import FileList from "./FileList";
import UploadInput, { UploadInputProps } from "./UploadInput";
import { UploadFileType } from "./FileListItem";
import { setUid } from "@w-design/helpers";
import { fileToObject, localErrorHandler } from "./utils";
import dummyThumb from "./dummyThumb";

export interface UploadProps extends UploadInputProps {
  fileList: UploadFileType[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFileType<any>[]>>;
  onUpload: (file: UploadFileType) => Promise<void>;
  onCancel: (file: UploadFileType) => boolean;
}

const Upload: React.FC<UploadProps> = ({
  label = "+ Add file",
  multiple = false,
  accept,
  disabled,
  fileList,
  setFileList,
  onUpload,
  onCancel,
}) => {
  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawfiles = Array.prototype.slice.call(e.target.files);

    let newFiles: UploadFileType[] = [];

    if (rawfiles && rawfiles.length >= 0) {
      rawfiles.forEach((file) => {
        const reader: FileReader = new FileReader();
        // Check load status error/success on local, preview file info
        reader.onerror = localErrorHandler;
        reader.onload = ((f) => {
          return async (e: ProgressEvent<any>) => {
            // handle preview image from local url
            let source: string;
            const { result } = e.target;

            if (!f.type.match("image.*")) {
              source = dummyThumb;
            } else {
              source = result;
            }

            // transform file object
            const transformedFile: UploadFileType = {
              ...fileToObject(f, source),
              data: f,
              uid: setUid("file"),
            };

            newFiles = [transformedFile, ...newFiles];
            setFileList((prevList) => [...newFiles, ...prevList]);
          };
        })(file);
        // Read in the file as a data URL.
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <>
      <UploadInput
        label={label}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onInputChange={handleAddFile}
      />

      {fileList.length > 0 && (
        <FileList fileList={fileList} onUpload={onUpload} onCancel={onCancel} />
      )}
    </>
  );
};

export default Upload;

// Check file types allowed, anything before upload execute from props (if any)
// if (beforeUpload) {
//   const before = beforeUpload(transformedFile);
//   if (before && typeof before !== "boolean") {
//     before
//       .then((processedFile: FormDataEntryValue) => {
//         // transform file to something
//         // such as add water mark
//         const processedFileType = Object.prototype.toString.call(
//           processedFile
//         );
//         if (
//           processedFileType === "[object File]" ||
//           processedFileType === "[object Blob]"
//         ) {
//           const processedFile = Object.assign(transformedFile, {
//             data: processedFileType,
//           });

//           uploadFile = onUpload(processedFile);
//           newFiles = [uploadFile, ...newFiles];

//           return setFileList([...newFiles, ...fileList]);
//         }

//         uploadFile = onUpload(transformedFile);
//         newFiles = [uploadFile, ...newFiles];
//         return setFileList([...newFiles, ...fileList]);
//       })
//       .catch((err: any) => {
//         onUploadError && onUploadError(err);
//       });
//   } else if (before !== false) {
//     uploadFile = onUpload(transformedFile);
//     newFiles = [uploadFile, ...newFiles];
//     return setFileList([...newFiles, ...fileList]);
//   }
// }
