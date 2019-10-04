import { WFile, UploadFileType } from "./types";

// Handle parsing file upload to custom object
export const fileToObject = (file: WFile): UploadFileType => {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0
  } as UploadFileType;
};
