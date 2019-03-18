import React from "react";
import { Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";

const p1 = `
#### React UI library build with styled-components

I want to make a small library for my personal project. Feel free to use it, or help me to improve.


[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)


## Install

If use \`npm\`
`;

const p2 = `
## Getting start

To keep thing simple with theme, the library depends on **Provider**, you must use \`Provider\` on the top of the App.
`;

const p3 = `

## Features

Cover basic components

| Layout           | Elements              | Components       |
| ---------------- | --------------------- | ---------------- |
| ✓ ThemeProvider  | ✓ Button              | ✖ Progress Steps |
| ✓ Container      | ✓ InputField          | ✖ Avatar Group   |
| ✓ Flexbox        | ✖ Checkbox            | ✓ Navbar         |
| ✓ DisplayElement | ✖ Label               | ✖ Badges         |
| ✖ Masonry        | ✖ Image               | ✖ Arcordion      |
|                  | ✓ Spinner             | ✖ Breadcrumbs    |
|                  | ✖ Panel               | ✖ Card           |
|                  | ✖ Table               | ✖ Chip           |
|                  | ✖ List                | ✖ Menu           |
|                  | ✖ Divider             | ✓ Modal          |
|                  | ✖ Progress Loader     | ✖ Dropdown       |
|                  | ✓ Portal              | ✖ Sidebar        |
|                  | ✖ Avatar              | ✖ Steps          |
|                  | ✖ Toggle              | ✖ Tabs           |
|                  | ✖ Text Area           | ✖ Push Message   |
|                  | ✖ Inline message      | ✖ Tooltip        |
|                  | ✓ Typo                | ✖ Popover        |
|                  | ✓ Icon (Font awesome) | ✖ Comment        |
|                  |                       | ✖ Select         |
|                  |                       | ✓ FormGroup      |
|                  |                       | ✓ InputForm      |
|                  |                       | ✖ Pagination     |


**Legend**

- ✓ Implemented

- ✖ Not Implemented



## 🐞 Report

### For Issues

Please open [Issue](https://github.com/we-mak/w-design/issues) to report bugs.

### Questions

For how-to questions and other non-issues, please use StackOverflow instead of Github issues. Add tag 'w-design' for your question in StackOverflow.

### Development

**Folders structure**

\`\`\`sh
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
\`\`\`


This package is built with \`TypeScript\`

It has 2 dependencies: \`styled-system\`, \`clean-tag\`, those dependencies are small but really good to use for styling with **Styled-components** under the hood.

Please check these packages before getting start to contribute.

Local development is broken into two parts (ideally using two tabs).

`;

const p4 = `

### Publishing to NPM

\`npm publish\`

This builds cjs and es versions of your module to dist/ and then publishes your module to npm.

Make sure that any npm modules you want as peer dependencies are properly marked as peerDependencies in package.json. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

### Deploy to Github Pages

\`npm run deploy\`

This creates a production build of the example create-react-app that showcases your library and then runs gh-pages to deploy the resulting bundle.



## License

MIT © [We-mak](https://github.com/we-mak)
`;

const Intro = () => {
  return (
    <>
      <Typo appearance="h1">Introduction</Typo>
      <ReactMarkdown source={p1} />
      <Highlight className="sh">npm install --save w-design styled-components</Highlight>
      or for yarn
      <Highlight className="sh">yarn add w-design</Highlight>
      <ReactMarkdown source={p2} />
      <Highlight language="jsx">
        {`
          import { Provider, Container } from "w-design";

          ReactDOM.render(
            <Provider>
              <Container> Lorem ipsum </Container>
            </Provider>,
            mountNode
          );`}
      </Highlight>
      <ReactMarkdown source={p3} />
      <Highlight className="sh">npm start # runs rollup with watch flag</Highlight>
      First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever
      you make changes.
      <br />
      The second part will be running the example/ create-react-app that's linked to the local
      version of your module.
      <Highlight className="sh">{`
      # (in another tab)
      cd example
      npm start # runs create-react-app dev server
      `}</Highlight>
      Now, anytime you make a change to your library in src/ or to the example app's example/src,
      create-react-app will live-reload your local dev server so you can iterate on your component
      in real-time.
      <ReactMarkdown source={p4} />
    </>
  );
};

export default Intro;
