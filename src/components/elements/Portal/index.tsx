import * as React from "react";
import * as ReactDOM from "react-dom";

interface PortalProps extends React.ReactElement<any> {
  children?: React.ReactNode;
}

const Portal: any = ({ children }: PortalProps) => {
  const Root = document.body;
  let target: HTMLElement = document.createElement("div");

  React.useEffect(() => {
    Root.appendChild(target);
    return () => {
      Root.removeChild(target);
    };
  }, [target]);

  return ReactDOM.createPortal(children, target);
};

export default Portal;