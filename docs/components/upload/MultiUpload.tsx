import * as React from "react";
import { Upload, xhrRequest } from "@w-design/upload";
import {
  UploadFileType,
  UploadStatus,
} from "@w-design/upload/lib/types/FileListItem";
import { useState } from "react";

// Helper to update list
const updateList = (
  list: UploadFileType[],
  updateFile: UploadFileType,
  newProps: { status?: UploadStatus; percent?: number; response?: any }
) => {
  return list.map((item) =>
    item.uid === updateFile.uid
      ? Object.assign({ ...item }, { ...newProps })
      : item
  );
};

const MultiUpload = () => {
  // initialize xhr from xhrRequest utility
  const xhr = typeof window !== "undefined" && xhrRequest();

  // MUST HAVE: Create state for file list
  const [fileList, setFileList] = useState<UploadFileType[]>([]);

  const post = async (file: UploadFileType) => {
    try {
      const result = await xhr.upload({
        endpoint: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        method: "POST",
        file,
        onLoadStart: () => {
          setFileList((list) => updateList(list, file, { status: "progress" }));
        },
        onProgress: (e: ProgressEvent<EventTarget>) => {
          let percentLoaded = 0;

          if (e.lengthComputable) {
            percentLoaded = Math.round((e.loaded / e.total) * 100);
          }

          setFileList((list) =>
            updateList(list, file, { percent: percentLoaded })
          );
        },
      });

      setFileList((list) =>
        updateList(list, file, { status: "success", response: result })
      );
    } catch (err) {
      setFileList((list) =>
        updateList(list, file, { status: "error", response: err })
      );
    }
  };

  return (
    <Upload
      multiple
      setFileList={setFileList}
      fileList={fileList}
      onUpload={post}
      onCancel={(file) => {
        alert(`Upload Cancel: ${file.name}`);
        xhr && xhr.abort();
        return true;
      }}
    />
  );
};

export default MultiUpload;
