import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

export const CodeBlock = ({ exampleCode, language = "jsx" }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={exampleCode} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            color: "rgb(214, 222, 235)",
            backgroundColor: "rgb(1, 22, 39)",
            padding: ".5rem"
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
