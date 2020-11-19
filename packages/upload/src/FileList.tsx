import * as React from "react";
import styled from "styled-components";
import { List } from "@w-design/core";
import { GlobProps } from "@w-design/core/lib/types/common/props";
import FileListItem, { UploadFileType } from "./FileListItem";

const Container = styled.span`
  display: block;
  position: relative;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background: #fff;
  width: 100%;
`;

export interface UploadListProps extends GlobProps {
  fileList: UploadFileType[]; // Current added file
  onUpload: (file: UploadFileType) => Promise<void>;
  onCancel: (file: UploadFileType) => boolean;
}

const FileList: React.FC<UploadListProps> = ({
  fileList,
  onUpload,
  onCancel,
}) => {
  return (
    <Container>
      <List
        sourceData={fileList}
        rowKey={(item) => item.uid}
        rows={(item: UploadFileType) => {
          return (
            <FileListItem item={item} onUpload={onUpload} onCancel={onCancel} />
          );
        }}
      />
    </Container>
  );
};
export default FileList;
