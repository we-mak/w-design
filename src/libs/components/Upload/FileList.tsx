import * as React from "react";
import ProgressLoader from "../../elements/ProgressLoader";
import List, { ListItem } from "../List";
import { UploadListProps } from "./types";
import { ListContainer } from "./Styled";

export const FileList: React.FC<UploadListProps> = ({ fileList, ...rest }) => {
  return (
    <ListContainer>
      <List
        sourceData={fileList}
        rows={(item: any) => {
          return (
            <ListItem thumbnail={item.source}>
              <div style={{ width: "100%" }}>
                {item.name}
                <ProgressLoader size="sm" percent={item.percent} />
              </div>
            </ListItem>
          );
        }}
        {...rest}
      ></List>
    </ListContainer>
  );
};
