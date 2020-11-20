/**
 * xhrRequest
 * XMLHttpRequest function
 */
import { UploadFileType } from "./FileListItem";

export interface RequestUploadType {
  endpoint: string;
  method: "POST" | "PUT" | "post" | "put";
  headers?: Object;
  timeout?: number;
  withCredentials?: boolean;
  ignoreCache?: boolean;
  body?: Object;
}

/* Extended functions*/
export interface RequestUploadProps {
  onLoadStart?: (e: ProgressEvent<EventTarget>) => any;
  onProgress?: (e: ProgressEvent<EventTarget>) => any;
  onSuccess?: (body: Object) => void;
  onError?: (e?: ProgressEvent<EventTarget>, body?: Object) => void;
}

export interface XhrRequestType extends RequestUploadType, RequestUploadProps {
  file: UploadFileType;
}

export const xhrRequest = (): {
  upload?: (options: XhrRequestType) => Promise<any>;
  abort?: () => void;
} => {
  const xhr = new XMLHttpRequest();

  const upload = ({
    method = "POST",
    endpoint,
    headers,
    withCredentials,
    ignoreCache,
    file,
    onLoadStart,
    onProgress,
  }: XhrRequestType) => {
    return new Promise((resolve, reject) => {
      xhr.open(method, endpoint, true);

      // Set request headers
      if (headers) {
        // close default XHR header
        // when set headers['X-Requested-With'] = null
        if (headers["X-Requested-With"] !== null) {
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        }

        Object.keys(headers).forEach((key) =>
          xhr.setRequestHeader(key, headers[key])
        );
      }

      if (ignoreCache) {
        xhr.setRequestHeader("Cache-Control", "no-cache");
      }

      if (withCredentials && "withCredentials" in xhr) {
        xhr.withCredentials = true;
      }

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          // add success
          // onSuccess && onSuccess(getBody(xhr));
          return resolve({
            status: this.status,
            statusText: this.statusText,
            response: this.response,
          });
        } else {
          return reject({
            status: this.status,
            statusText: this.statusText,
            response: this.response,
          });
        }
      };

      if (onLoadStart) {
        xhr.onloadstart = (e) => onLoadStart(e);
      }
      if (onProgress) {
        xhr.upload.onprogress = (e) => onProgress(e);
      }

      xhr.onerror = function () {
        return reject({
          status: this.status,
          statusText: this.statusText,
          response: this.response,
        });
      };

      let formData = new FormData();
      formData.append("file", file.data!);
      xhr.send(formData);
    });
  };

  return {
    upload,
    abort() {
      return xhr.abort();
    },
  };
};
