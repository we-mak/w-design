import { WFile, UploadFileType, UploadStatus } from "./types";

// Handle parsing file upload to custom object
export const fileToObject = (file: WFile): UploadFileType => {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid
  } as UploadFileType;
};

export function getFileItem(file: UploadFileType, fileList: UploadFileType[]) {
  const matchKey = file.uid !== undefined ? "uid" : "name";
  return fileList.filter(item => item[matchKey] === file[matchKey])[0];
}

export function updateFileState(
  file: UploadFileType,
  fileList: UploadFileType[],
  newProps: {
    status?: UploadStatus;
    response?: any;
    percent?: number;
  }
) {
  const matchKey = file.uid !== undefined ? "uid" : "name";
  return fileList.map(item =>
    item[matchKey] === file[matchKey] ? Object.assign(item, newProps) : item
  );
}

// https://github.com/ant-design/ant-design/blob/master/components/upload/utils.tsx
// export function genPercentAdd() {
//   let k = 0.1;
//   const i = 0.01;
//   const end = 0.98;
//   return (s: number) => {
//     let start = s;
//     if (start >= end) {
//       return start;
//     }

//     start += k;
//     k -= i;
//     if (k < 0.001) {
//       k = 0.001;
//     }
//     return start;
//   };
// }

export function removeFileItem(
  file: UploadFileType,
  fileList: UploadFileType[]
) {
  const matchKey = file.uid !== undefined ? "uid" : "name";
  const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}
