export {};
declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      XMLHttpRequest: XMLHttpRequest;
    }
  }
  interface Window {
    IntersectionObserver: IntersectionObserver;
  }
}

import * as React from "react";

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
