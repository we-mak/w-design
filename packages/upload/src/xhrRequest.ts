/**
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * xhrRequest
 * XMLHttpRequest function
 */
import { UploadFileType } from "./FileList";

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
  file: UploadFileType;
  onProgress: (ev: ProgressEvent<EventTarget>) => any;
  onLoadStart?: () => any; // ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null
  onSuccess?: (body: Object) => void;
  onError?: (event: Error, body?: Object) => void;
}

interface XhrRequestType extends RequestUploadType, RequestUploadProps {}

// function getBody(xhr: XMLHttpRequest) {
//   const text = xhr.responseText || xhr.response;
//   if (!text) {
//     return text;
//   }

//   try {
//     return JSON.parse(text);
//   } catch (e) {
//     return text;
//   }
// }

export function xhrRequest(option: XhrRequestType) {
  const xhr = new XMLHttpRequest();

  const { method = "POST", endpoint, headers, ignoreCache, onLoadStart, onProgress, file } = option;

  const upload = new Promise((resolve, reject) => {
    xhr.open(method, endpoint, true);

    // Set request headers
    if (headers) {
      // close default XHR header
      // when set headers['X-Requested-With'] = null
      if (headers["X-Requested-With"] !== null) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }

      Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
    }

    if (ignoreCache) {
      xhr.setRequestHeader("Cache-Control", "no-cache");
    }

    if (option.withCredentials && "withCredentials" in xhr) {
      xhr.withCredentials = true;
    }

    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        // add success
        // onSuccess && onSuccess(getBody(xhr));
        return resolve(xhr.response);
      } else {
        return reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    if (onLoadStart) {
      xhr.onloadstart = onLoadStart();
    }

    xhr.upload.onprogress = e => onProgress(e);

    xhr.onerror = function() {
      return reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };

    let formData = new FormData();
    formData.append("file", file.data);
    xhr.send(formData);
  });

  const abort = () => xhr.abort();

  return {
    upload,
    abort
  };
}
