import * as React from "react";
import * as ReactDOM from "react-dom";

interface PortalProp {
  children?: React.ReactChild;
}

const Portal: React.ReactNode = ({ children }: PortalProp) => {
  const Root = document.body;
  let el = document.createElement("div");

  React.useEffect(() => {
    Root.appendChild(el);
    return () => {
      Root.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
