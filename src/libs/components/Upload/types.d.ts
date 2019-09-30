import { GlobProps } from "../../../typings";

export type UploadType = "textName" | "picture";

export interface FileType {
  uid: string;
  size: number;
  type: string;
  name?: string;
  lastModified?: number;
  lastModifiedDate: Date;
}

export interface UploadProps {
  multiple?: boolean;
  label?: string;
}
