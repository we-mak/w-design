<div align="center">
 <img height="60" width="60" src="resources/img/logo.png">
 <h1>w-design</h1>
</div>

A **Mobile First** React UI library build with styled-components

[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)

## Install

```bash
npm install --save w-design
```

## Install

`yarn add w-design` or `npm install w-design`

## Usage guide

Simple example

```js
import { Text } from "w-design";
ReactDOM.render(<Container> Lorem ipsum </Container>, mountNode);
```

## Version 1.0.0 Features

Cover basic components

| Layout          | Elements   | Components    |
| --------------- | ---------- | ------------- |
| ✓ ThemeProvider | ✓ Button   | ✖ Nav         |
| ✓ Container     | ✖ Input    | ✖ Avatar      |
| ✓ Grid          | ✖ Form     | ✖ Navbar      |
| ✓ Hide          | ✖ Label    | ✖ Badges      |
| ✖ Masonry       | ✖ Image    | ✖ Arcordion   |
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

## Contribute

This project uses, for details, read here https://github.com/transitive-bullshit/create-react-library

### Development

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

MIT © [Sean](https://github.com/Sean)
