<div align="center">
 <img height="60" width="60" src="resources/img/logo.png">
 <h1>w-design</h1>
</div>

A React UI library build with styled-components

[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/we-mak/w-design.svg)](https://greenkeeper.io/)

## Install

If use `npm`

```sh
npm install --save w-design styled-components
```

for yarn

`yarn add w-design` or `npm install w-design`

## Usage guide

To keep thing simple with theme, you must use `Provider` on the top..

```js
import { Provider, Container } from "w-design";
ReactDOM.render(
  <Provider>
    <Container> Lorem ipsum </Container>
  </Provider>,
  mountNode
);
```

Theme provider is based on [styled-components](https://www.styled-components.com/) and making theme with [styled-system](http://jxnblk.com/styled-system/)

Provider provides theme for your layout, you can supply your theme by insert your theme object by `theme` props
Default theme

```js static
defaultTheme = {
  breakpoint: ["24em", "32em", "48em", "64em", "80em"],
  fonts:
    '-apple-system, BlinkMacSystemFont, Helvetica, "Helvetica Neue", system-ui, sans-serif',
  fontSizes: [
    "0.7rem",
    "0.8rem",
    "0.9rem",
    "1rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "2rem"
  ],
  fontWeights = { normal: 400, strong: 500, bold: 700, xbold: 900 },
  lineHeights = [1, 1.125, 1.25, 1.5],
  letterSpacings = { normal: "normal", caps: "0.25em" },
  radii = ["0rem", "0.1rem", "0.2rem", "0.3rem", "0.4rem"],
  space = [0, 4, 8, 16, 32, 64, 128], // space is used for margin and padding scales
  shadows = [
    "none",
    `0 .2rem .5rem ${hex2Rgba(colors.N50, 0.5)}`,
    `inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)`
  ],
  colors: {...} // see colors
};
```

```js
<Provider>
  <h1>Default </h1>
  <p>
    Lorem ipsum
    <span>
      <a href="#">dolor </a>
    </span>
    sip amet
  </p>
</Provider>
```

```js
<Provider
  theme={{
    fonts: "Roboto, Helvetica, sans-serif"
  }}
>
  <h1>Roboto</h1>
  <p>
    Lorem ipsum
    <span>
      <a href="#">dolor </a>
    </span>
    sip amet
  </p>
</Provider>
```

## Features list

Cover basic components, widgets from 3rd parties libray

| Layout            | Elements               | Components      | Hooks              |
| ----------------- | ---------------------- | --------------- | ------------------ |
| ✅ Container      | ✅ InputField          | ✅ AvatarGroup  | ✅ useClickOutside |
| ✅ Flexbox        | ✅ Checkbox            | ✅ Navbar       | ✅ useField        |
| ✅ DisplayElement | ✅ Label               | ❌ Badges       | ✅ useForm         |
| ✅ ThemeProvider  | ✅ Picture             | ❌ Collapsible  |                    |
| ✅ Masonry        | ✅ Spinner             | ✅ PushMessage  |                    |
|                   | ❌ Chip                | ❌ Steps        |                    |
|                   | ✅ List                | ✅ Menu         |                    |
|                   | ✅ Divider             | ✅ Modal        |                    |
|                   | ✅ ProgressLoader      | ✅ Dropdown     |                    |
|                   | ✅ Portal              | ✅ Drawer       |                    |
|                   | ✅ Avatar              | ✅ AnchorScroll |                    |
|                   | ❌ Toggle              | ❌ Tabs         |                    |
|                   | ✅ TextArea            | ❌ Table        |                    |
|                   | ✅ SectionMessage      | ✅ FormGroup    |                    |
|                   | ✅ Typo                | ✅ Comment      |                    |
|                   | ✅ Icon (Font awesome) | ✅ InputForm    |                    |
|                   | ✅ Radio               | ❌ Pagination   |                    |
|                   | ✅ Button              | ✅ Card         |                    |
|                   | ✅ Image               | ✅ Upload       |                    |
|                   | ✅ SectionMessage      |                 |                    |
|                   | ❌ Tooltip             |                 |                    |
|                   | ❌ Popover             |                 |                    |
|                   | ✅ Breadcrumbs         |                 |                    |
|                   | ✅ ImageRatio          |                 |                    |
|                   | ❌ EmptyView           |                 |                    |

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

This package is built with dependencies: `styled-system`
Props checking is under `TypeScript`

Please check these packages before getting start to contribute.

Local development is broken into two parts (ideally using two tabs).

```sh
npm start # runs rollup with watch flag
```

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

The second part will be running the example/ create-react-app that's linked to the local version of your module.

```sh
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

### Publishing to NPM

`npm publish`

This builds cjs and es versions of your module to dist/ and then publishes your module to npm.

Make sure that any npm modules you want as peer dependencies are properly marked as peerDependencies in package.json. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

Deploying to Github Pages
`npm run deploy`

This creates a production build of the example create-react-app that showcases your library and then runs gh-pages to deploy the resulting bundle.

## License

MIT © [We-mak](https://github.com/we-mak)
