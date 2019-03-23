import React, { useEffect } from "react";
import Prism from "prismjs";
import "../styles/theme.css";

export const CodeBlock = ({ children, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code className={language}>{children}</code>
    </pre>
  );
};
