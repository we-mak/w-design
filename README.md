<div align="center">
 <img height="60" width="60" src="resources/img/logo.png">
 <h1>w-design</h1>
</div>

# Introduction

#### A React UI toolkit library is built with typescript

[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/we-mak/w-design.svg)](https://greenkeeper.io/)

Main focus of this libary is styling with css-in-js, keep it as small as posible. Suitable for web application.
Feel free to use this library, or help us to improve it.

## Features

- Written with Typescript to improve dev experience.
- Code splitting built with babel.
- Styled with styled-components and styled-system
- Suitable for web application.
- Supports modern web browsers, included common js & es. If you care about IE, don't use this library.

## Packages

Published libraries at `npm`

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fcore.svg?label=@w-design/core)](https://www.npmjs.com/package/@w-design/core)
  Core elements & components

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fform.svg?label=@w-design/form)](https://www.npmjs.com/package/@w-design/form)
  All needed form, input, box... components and hooks to handle form behaviour

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fmasonry.svg?label=@w-design/masonry)](https://www.npmjs.com/package/@w-design/masonry)
  Masonry component layout with flex box layout

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fupload.svg?label=@w-design/upload)](https://www.npmjs.com/package/@w-design/upload)
  Upload components with XHR request supports

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fhooks.svg?label=@w-design/hooks)](https://www.npmjs.com/package/@w-design/hooks)
  React custom hooks

- [![npm](https://img.shields.io/npm/v/%40w-design%2Fhelpers.svg?label=@w-design/helpers)](https://www.npmjs.com/package/@w-design/helpers)
  Utility functions to help to resolve style, object, array, string...

## 🐞 Report

### For Issues

Please open [Issue](https://github.com/we-mak/w-design/issues) to report bugs.

### Questions

For how-to questions and other non-issues, please use StackOverflow instead of Github issues. Add tag 'w-design' for your question in StackOverflow.

## Development

We are using [Lerna](https://lerna.js.org/) to manage monorepo packages, please check their document.

At the root directory, do following steps:

1. Pull the repository and install by `yarn install`
2. Bootstrap all packages `yarn bootstrap`
3. Build packages `yarn build` before execute run dev
4. After finished, run `yarn dev:es` and `yarn dev:type` at separate terminal. This command will execute watching all packages within lerna parallel mode. You can update the packages now.
5. To add information in the documents, at `docs` directory, run `yarn dev`. We are using `next.js` and

### Steps to publish

1. Check update all packages dependencies
2. Run all tests and coverage
3. Build packages
4. Publish

## License

MIT © [We-mak](https://github.com/we-mak)
