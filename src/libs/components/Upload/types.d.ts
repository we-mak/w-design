import { GlobProps } from "../../../typings";

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
