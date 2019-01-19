<div align="center">
 <img height="60" width="60" src="resources/img/logo.png">
 <h1>w-design</h1>
</div>

A React UI library build with styled-components

[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)

**WORK IS IN DEVELOPMENT**

## Install

If use `npm`

```sh
npm install --save w-design styled-components
```

for yarn

`yarn add w-design` or `npm install w-design`

## Usage guide

Simple example

```js
import { Container } from "w-design";
ReactDOM.render(<Container> Lorem ipsum </Container>, mountNode);
```

## Version 1.0.0 Features

Cover basic components

| Layout          | Elements               | Components       |
| --------------- | ---------------------- | ---------------- |
| ✓ ThemeProvider | ✖ Button (in progress) | ✖ Progress Steps |
| ✓ Container     | ✖ Text Input           | ✖ Avatar Group   |
| ✓ Grid          | ✖ Checkbox             | ✖ Navbar         |
| ✖ Masonry       | ✖ Label                | ✖ Badges         |
|                 | ✖ Image                | ✖ Arcordion      |
|                 | ✓ Spinner              | ✖ Breadcrumbs    |
|                 | ✖ Panel                | ✖ Card           |
|                 | ✖ Table                | ✖ Chip           |
|                 | ✖ List                 | ✖ Menu           |
|                 | ✖ Divider              | ✖ Modal          |
|                 | ✓ Heading              | ✖ Pagination     |
|                 | ✖ Progress Loader      | ✖ Dropdown       |
|                 | ✖ Portal               | ✖ Sidebar        |
|                 | ✖ Avatar               | ✖ Steps          |
|                 | ✖ Toggle               | ✖ Tabs           |
|                 | ✖ Text Area            | ✖ Push Message   |
|                 | ✖ Inline message       | ✖ Tooltip        |
|                 |                        | ✖ Popover        |
|                 |                        | ✖ Comment        |
|                 |                        | ✖ Select         |
|                 |                        | ✖ ButtonGroup    |
|                 |                        | ✖ Input Group    |
|                 |                        | ✖ Form           |

## 🐞 Report

### For Issues

Please open Issue to report bugs.

### Questions

For how-to questions and other non-issues, please use StackOverflow instead of Github issues. Add tag 'w-design' for your question in StackOverflow.

### Folders structure

```sh
├── packages # Build packages
│   └── **/*
│
├── src
│   ├── @types/**/*.d.ts ## definite for dependencies package
│   ├── common ## static default variables, utilitites
│   └── components ## Core library component folder
│
│
├── resources
│   ├── GUI ## UI design system files
│   └── img ## Image for docs
│
├── CHANGELOG.md ## Change history of every changes of each release.
├── README.md ## Guide content
├── tslint.json
├── tsconfig.json
├── jest.config.json
├── rollup.config.js ## rollup config
└── package.json ## npm packages config
```

### Development

This package is built with dependencies: `styled-system`, `clean-tag`
Props checking is under `TypeScript`

Please check these packages before getting start to contribute.

Local development is broken into two parts (ideally using two tabs).

```sh
npm start # runs rollup with watch flag
```

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

npm start # runs rollup with watch flag
The second part will be running the example/ create-react-app that's linked to the local version of your module.

```sh
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

###Publishing to NPM

`npm publish`

This builds cjs and es versions of your module to dist/ and then publishes your module to npm.

Make sure that any npm modules you want as peer dependencies are properly marked as peerDependencies in package.json. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

Deploying to Github Pages
`npm run deploy`

This creates a production build of the example create-react-app that showcases your library and then runs gh-pages to deploy the resulting bundle.

## License

MIT © [Sean](https://github.com/we-mak)
