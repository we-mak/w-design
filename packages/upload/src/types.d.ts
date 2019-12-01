import { ReactNode } from "react";
import { GlobProps } from "@w-design/core";

// Type of button
export type UploadType = "textName" | "avatar";
// Status applied when upload file
export type UploadStatus = "error" | "success" | "progress";

export interface WFile extends File {
  uid: string;
  readonly lastModifiedDate: Date;
  readonly webkitRelativePath: string;
}

export interface UploadFileType<T = any> {
  uid: string;
  size: number;
  type: string;
  name?: string;
  lastModified?: number;
  lastModifiedDate: Date;
  percent?: number;
  url?: string;
  thumbUrl?: string;
  data?: any;
  status?: UploadStatus;
  webkitRelativePath?: string;
  error?: any;
  response?: T;
}

export interface UploadChangeParam<T extends object = UploadFileType> {
  file: T;
  fileList: UploadFileType[];
  event?: { percent: number };
}

export type RequestUploadType = {
  endpoint: string;
  // request method
  method: "POST" | "PUT" | "post" | "put";
  timeout: number;
  headers?: { [key: string]: string }; // Fetch api headers interface
  withCredentials?: boolean;
  ignoreCache?: boolean;
  // body?: any;
};

export interface UploadListProps extends GlobProps {
  fileList?: UploadFileType[];
  rowKey?: string | ((item: any) => string);
  onUpload?: (file: UploadFileType) => void;
  onCancel?: (file: UploadFileType) => void;
}

export interface UploadProps extends UploadListProps {
  /* Accept input attribute*/
  accept?: string;
  /* upload type: file name in text or picture*/
  uploadType: UploadType;
  /* allow upload multiple files*/
  multiple?: boolean;
  /* Label title under Label tag*/
  label?: string | ReactNode;
  /* default file list */
  defaultFileList?: UploadFileType[];
  /* Function to executed before upload. If `false` the upload will be reject */
  beforeUpload?: (file, fileList) => boolean | Promise;
  /* restApi request upload use fetch Api*/
  requestUpload: RequestUploadType;
  /* modified onchange behavior*/
  onChange?: (uploadInfo: UploadChangeParam) => void;
  /* disable input */
  disabled?: boolean;
  /* remove or abort upload*/
  onRemove?: (file: UploadFileType) => void | boolean | Promise<void | boolean>;
}
