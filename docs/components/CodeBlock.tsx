import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            color: "rgb(214, 222, 235)",
            backgroundColor: "rgb(1, 22, 39)",
            padding: "1rem 1.2rem 0 1.2rem",
            borderRadius: ".4rem"
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
