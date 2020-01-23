import * as React from "react";
import styled from "styled-components";
import { Button, ProgressLoader, List, ListItem, Box } from "@w-design/core";
import { GlobProps } from "@w-design/core/lib/types/common/props";
import { getListStyle } from "./getStyled";

const Container = styled.span`
  ${getListStyle};
`;

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

export interface UploadListProps extends GlobProps {
  fileList?: UploadFileType[];
  rowKey?: string | ((item: any) => string);
  onUpload?: (file: UploadFileType) => void;
  onCancel?: (file: UploadFileType) => void;
}

export const FileList: React.FC<UploadListProps> = ({ fileList, onUpload, onCancel, ...rest }) => {
  const [list, setList] = React.useState(fileList);

  React.useEffect(() => {
    setList(fileList);
  }, [fileList]);

  return (
    <Container>
      <List
        sourceData={list}
        rows={(item: any) => {
          return (
            <ListItem
              thumbnail={item.source}
              actions={[
                <Button
                  key={0}
                  appearance="primary"
                  iconOnly
                  iconBefore="fas fa-file-upload"
                  onClick={() => onUpload && onUpload(item)}
                  isLoading={item.status === "progress"}
                  isDisabled={item.status === "success"}
                ></Button>,
                <Button
                  key={1}
                  iconOnly
                  iconBefore="fas fa-times"
                  onClick={() => onCancel && onCancel(item)}
                  isDisabled={item.status === "success"}
                ></Button>
              ]}
            >
              <Box width="100%">
                {item.name}
                {item.status && (
                  <ProgressLoader size="sm" percent={item.percent} status={item.status} />
                )}
              </Box>
            </ListItem>
          );
        }}
        {...rest}
      />
    </Container>
  );
};
