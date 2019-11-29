import * as React from "react";
import ProgressLoader from "../../elements/ProgressLoader";
import List, { ListItem } from "../List";
import { UploadListProps } from "./types";
import { ListContainer } from "./Styled";
import Button from "../../elements/Button";

export const FileList: React.FC<UploadListProps> = ({
  fileList,
  onUpload,
  onCancel,
  ...rest
}) => {
  const [list, setList] = React.useState(fileList);

  React.useEffect(() => {
    setList(fileList);
  }, [fileList]);

  return (
    <ListContainer>
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
              <div style={{ width: "100%" }}>
                {item.name}
                {item.status && (
                  <ProgressLoader
                    size="sm"
                    percent={item.percent}
                    status={item.status}
                  />
                )}
              </div>
            </ListItem>
          );
        }}
        {...rest}
      ></List>
    </ListContainer>
  );
};
