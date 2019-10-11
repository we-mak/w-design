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

/*
 * Image preview helper
 */
const extname = (url: string = "") => {
  const temp = url.split("/");
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
};

const isImageFileType = (type: string): boolean => !!type && type.indexOf("image/") === 0;

export const isImageUrl = (file: UploadFileType): boolean => {
  if (isImageFileType(file.type)) {
    return true;
  }
  const url: string = (file.thumbUrl || file.url) as string;
  const extension = extname(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
    return true;
  }
  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }
  if (extension) {
    // other file types which have extension
    return false;
  }
  return true;
};
