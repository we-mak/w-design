import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardFooter,
  Container,
  Icon
} from "@w-design/core";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../components/CodeBlock";
import { Layout } from "../components/Layout";
import "../css/index.css";

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardFooter,
  Container,
  Icon
};

export default ({ Component, pageProps }) => (
  <Layout>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </Layout>
);
