import React from "react";
import {
  AnchorScroll,
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonGroup
} from "@w-design/core";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../components/CodeBlock";
import { Layout } from "../components/Layout";
import "../css/index.css";

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  AnchorScroll,
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonGroup
};

export default ({ Component, pageProps }) => (
  <Layout>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </Layout>
);
