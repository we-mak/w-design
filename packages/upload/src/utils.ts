import { UploadFileType, UploadStatus, WFile } from "./FileListItem";

// Handle parsing file upload to custom object
export const fileToObject = (file: WFile, source: string): UploadFileType => {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    source,
  } as UploadFileType;
};

export function updateFileState(
  file: UploadFileType,
  fileList: UploadFileType[],
  newProps: {
    status?: UploadStatus;
    response?: any;
    percent?: number;
  }
) {
  return fileList.map((item) =>
    item["uid"] === file["uid"] ? Object.assign(item, newProps) : item
  );
}

// Handle error from local reading file
export function localErrorHandler(ev: any) {
  const { error } = ev;
  switch (error.code) {
    case error.NOT_FOUND_ERR:
      new Error("File Not Found!");
      break;
    case error.NOT_SUPPORTED_ERR:
      new Error("The operation is not supported");
      break;
    case error.ABORT_ERR:
      break; // noop
    default:
      new Error("An error occurred reading this file.");
  }
}
