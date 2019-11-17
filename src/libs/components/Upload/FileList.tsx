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

  console.log(list);

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
                  appearance="primary"
                  iconOnly
                  iconBefore="fas fa-file-upload"
                  key={0}
                  onClick={() => onUpload && onUpload(item)}
                ></Button>,
                <Button
                  iconOnly
                  iconBefore="fas fa-times"
                  key={1}
                  onClick={() => onCancel && onCancel(item)}
                ></Button>
              ]}
            >
              <div style={{ width: "100%" }}>
                {item.name}
                {item.percent && (
                  <ProgressLoader size="sm" percent={item.percent} />
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
