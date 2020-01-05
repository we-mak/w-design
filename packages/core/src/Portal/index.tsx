import * as React from "react";
import * as ReactDOM from "react-dom";

export interface PortalProps extends React.ReactElement<any> {
  children?: React.ReactNode;
}

const Portal: any = ({ children }: PortalProps) => {
  if (typeof window === "undefined") {
    return null;
  }

  const Root = window.document.body;
  let target: HTMLElement = window.document.createElement("div");

  React.useEffect(() => {
    Root.appendChild(target);
    return () => {
      Root.removeChild(target);
    };
  }, [target]);

  return ReactDOM.createPortal(children, target);
};

export default Portal;
