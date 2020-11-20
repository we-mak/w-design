import * as React from "react";
import { Button, ProgressLoader, ListItem } from "@w-design/core";
import styled from "styled-components";

const Info = styled.div`
  display: block;
  width: 100%;
`;

export interface WFile extends File {
  uid: string;
  readonly lastModifiedDate: Date;
  readonly webkitRelativePath: string;
}

// Status applied when upload file
export type UploadStatus = "error" | "success" | "progress";

export interface UploadFileType<T = any> {
  uid: string;
  size: number;
  type: string;
  lastModifiedDate: Date;
  source: string;
  name?: string;
  lastModified?: number;
  percent?: number;
  url?: string;
  thumbUrl?: string;
  data?: File | Blob | string;
  status?: UploadStatus;
  // webkitRelativePath?: string;
  // error?: any;
  response?: T;
}

export interface FileListItemProps {
  item: UploadFileType;
  onUpload: (file: UploadFileType) => Promise<void>;
  onCancel: (file: UploadFileType) => boolean;
}

const FileListItem = ({ item, onUpload, onCancel }: FileListItemProps) => {
  return (
    <ListItem
      thumbnail={item.source}
      actions={
        <>
          <Button
            appearance="primary"
            iconOnly
            iconBefore="fas fa-file-upload"
            onClick={() => onUpload(item)}
            isLoading={item.status === "progress"}
            isDisabled={item.status === "success"}
          ></Button>
          <Button
            iconOnly
            iconBefore="fas fa-times"
            onClick={() => onCancel(item)}
            isDisabled={item.status === "success"}
          ></Button>
        </>
      }
    >
      <Info>
        {item.name}
        {item.status !== "progress" && item.percent && (
          <ProgressLoader
            size="sm"
            percent={item.percent}
            status={item.status}
          />
        )}
      </Info>
    </ListItem>
  );
};

export default React.memo(FileListItem);
