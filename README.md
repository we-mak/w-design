<div align="center">
 <img height="60" width="60" src="resources/img/logo.png">
 <h1>w-design</h1>
</div>

A **Mobile First** React UI library build with styled-components

[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)

## Install

`yarn add w-design` or `npm install w-design`

## Usage guide

Simple example

```js
import { Text } from "w-design";
ReactDOM.render(<Container> Lorem ipsum </Container>, mountNode);
```

### Get start

**Note** Guide below is temporary under styleguidist markdown

### Layouts

- [Provider](https://github.com/we-mak/w-design/blob/master/src/components/layout/Provider/README.md)
- [Container](https://github.com/we-mak/w-design/blob/master/src/components/layout/Container/README.md)
- [Grid](https://github.com/we-mak/w-design/blob/master/src/components/layout/Grid/README.md)
- [Hide](https://github.com/we-mak/w-design/blob/master/src/components/layout/Hide/README.md)

### Elements

- [Heading](https://github.com/we-mak/w-design/blob/master/src/components/elements/Heading/README.md)
- [Button](https://github.com/we-mak/w-design/blob/master/src/components/elements/Button/README.md)
- [Spinner](https://github.com/we-mak/w-design/blob/master/src/components/elements/Spinner/README.md)

## Support

Modern browser: Chrome, Firefox, Safari, Edge

## Version 1.0.0 Features

Cover basic components

| Layout          | Elements   | Components    |
| --------------- | ---------- | ------------- |
| ✓ ThemeProvider | ✓ Button   | ✖ Nav         |
| ✓ Container     | ✖ Input    | ✖ Avatar      |
| ✓ Grid          | ✖ Form     | ✖ Navbar      |
| ✓ Hide          | ✖ Label    | ✖ Badges      |
|                 | ✖ Image    | ✖ Arcordion   |
|                 | ✓ Spinner  | ✖ Breadcrumbs |
|                 | ✖ Panel    | ✖ Card        |
|                 | ✖ Table    | ✖ Chip        |
|                 | ✖ List     | ✖ Menu        |
|                 | ✖ Divider  | ✖ Modal       |
|                 | ✓ Heading  | ✖ Pagination  |
|                 | ✖ Icon     | ✖ Dropdown    |
|                 | ✖ Progress | ✖ Sidebar     |
|                 |            | ✖ Steps       |
|                 |            | ✖ Tab         |
|                 |            | ✖ Toast       |
|                 |            | ✖ Tooltip     |
|                 |            | ✖ Popover     |
|                 |            | ✖ Comment     |

## [Change log](./CHANGELOG.md)

## 🐞 Report

### For Issues

Please open Issue to report bugs.

### Questions

For how-to questions and other non-issues, please use StackOverflow instead of Github issues. Add tag 'w-design' for your question in StackOverflow.

## Development

This package is built with dependencies: `react`, `react-dom`, `styled-component`, `styled-system`
Props checking is under `TypeScript`

Please check these packages before getting start to contribute.

### Folders structure

```bash
├── packages # Build packages
│   └── **/*
│
├── src
│   ├── @types/**/*.d.ts
│   ├── common ## static default variables
│   ├── components
│   │   ├── HOC ## Higher order components
│   │   └── **/* ## Core library component folder
│   └── utils ## utility functions to helps components
│
├── resources
│   ├── GUI ## UI design system files
│   ├── img ## Image for docs
│
├── CHANGELOG.md ## Change history of every changes of each release.
├── README.md ## Guide content
├── tslint.json
├── tsconfig.json
├── jest.config.json
├── setupTests.js ## test setup config
├── webpack.config.js ## webpack config
└── package.json ## npm packages config
```

#### packages

Built packages directory is where our NPM package contains.

#### src

Develop directory. It contains all sources of our elements, components, HOC...

### Component design

#### Props

##### Naming conventions

Prop naming depends on the type of property, it should be clear and easy to understand. Important, standard naming is in English.
In most case, our props name definition is in Noun to decribe **what** it is, example, for custom html tag definition, could be `customComponent` or `customHTMLTag`.
Boolean props should be named with verb, example: `isDisabled`, `isSelected`.

**Disclaim** Acronym name would be rejected.

##### **type** props

The prop types are defined via TypeScript. We should have reusable _"standard"_ global prop types, such as events handler, form controls, link props...
Standard prop types are located at `src/common/propsTypes.ts`

## Contributors

<ol>
  <li>
   <a href="https://github.com/viiiprock" target="_blank">SeanDang</a>
  </li>
</ol>

## [License](./LICENSE)

The MIT License (MIT)

Copyright (c) 2018 We-mak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
