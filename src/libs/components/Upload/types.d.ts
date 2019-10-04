import { ReactNode } from "react";
import { GlobProps } from "../../../typings";

// Type of button
export type UploadType = "textName" | "picture";
// Status applied when upload file
export type UploadStatus = "error" | "success" | "uploading";

export interface WFile extends File {
  uid: string;
  readonly lastModifiedDate: Date;
  readonly webkitRelativePath: string;
}

export interface UploadFileType {
  uid: string;
  size: number;
  type: string;
  name?: string;
  lastModified?: number;
  lastModifiedDate: Date;
  percent?: number;
  url?: string;
  thumbUrl?: string;
  status?: UploadStatus;
  webkitRelativePath?: string;
  error?: any;
}

export interface UploadChangeParam<T extends object = UploadFileType> {
  file: T;
  fileList: UploadFileType[];
  event?: { percent: number };
}

export type RequestUploadType = {
  endpoint?: string;
  headers?: Headers; // Fetch api headers interface
};

export interface UploadProps extends GlobProps {
  /* Accept input attribute*/
  accept?: string;
  /* upload type: file name in text or picture*/
  uploadType: UploadType;
  /* allow upload multiple files*/
  multiple?: boolean;
  /* Label title under Label tag*/
  label?: string | ReactNode;
  defaultFileList?: UploadFileType[];
  fileList?: UploadFileType[];
  /* restApi request upload use fetch Api*/
  requestUpload?: RequestUploadType;
  /* modified onchange behavior*/
  onChange?: (uploadInfo: UploadChangeParam) => void;
  /* disable input */
  disabled?: boolean;
}
