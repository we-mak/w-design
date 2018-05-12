<p align="center">
 <img height="64" width="64" src="resources/img/logo.png">
</p>

# w-design

[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)

A **Mobile First** React UI library build with styled-components

## Install

`yarn add w-design` or `npm install w-design`

## Usage

Simple example

```js
import { Text } from "w-design";
ReactDOM.render(<Container> Lorem ipsum </Container>, mountNode);
```

### Layout

* [Provider]("/src/components/layout/Provider/README.md")
* [Container]("/src/components/layout/Container/README.md")
* [Grid]("/src/components/layout/Grid/README.md")
* [Hide]("/src/components/layout/Hide/README.md")

## Support

* Modern browser and Internet Explorer 10+

## Version 1.0.0 Features

Cover basic components

| Layout          | Elements  | Components    |
| --------------- | --------- | ------------- |
| ✓ ThemeProvider | ✖ Button  | ✖ Nav         |
| ✓ Container     | ✖ Input   | ✖ Avatar      |
| ✓ Grid          | ✖ Form    | ✖ Navbar      |
| ✓ Hide          | ✖ Label   | ✖ Badges      |
| ✖ Masonry       | ✖ Media   | ✖ Arcordion   |
|                 | ✖ Loader  | ✖ Breadcrumbs |
|                 | ✖ Panel   | ✖ Card        |
|                 | ✖ Table   | ✖ Chip        |
|                 | ✖ List    | ✖ Menu        |
|                 | ✖ Divider | ✖ Modal       |
|                 | ✓ Heading | ✖ Pagination  |
|                 |           | ✖ Dropdown    |
|                 |           | ✖ Sidebar     |
|                 |           | ✖ Steps       |
|                 |           | ✖ Tab         |
|                 |           | ✖ Toast       |
|                 |           | ✖ Tooltip     |
|                 |           | ✖ Popover     |
|                 |           | ✖ Comment     |

## [Change log](./CHANGELOG.md)

## 🐞 Report

### For Issues

Please open Issue to report bugs.

### Questions

For how-to questions and other non-issues, please use StackOverflow instead of Github issues. Add tag 'w-design' for your question in StackOverflow.

## Development

Folder structure

```bash
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
└── packages
    └── **/* ## built library folders
```

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
