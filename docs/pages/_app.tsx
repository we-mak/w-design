import React from "react";
import { Container, Flexbox, Box, Icon } from "@w-design/core";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../components/CodeBlock";
import { Layout } from "../components/Layout";
import "../css/index.css";

const { Column } = Flexbox;

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  Container,
  Flexbox,
  Column,
  Box,
  Icon
};

export default ({ Component, pageProps }) => (
  <Layout>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </Layout>
);
