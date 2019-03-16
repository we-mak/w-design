import React from "react";
import { Typo } from "w-design";
import ReactMarkdown from "react-markdown";
import Highlight from "react-highlight";

const input1 = `
#### React UI library build with styled-components

I want to make a small library for my personal project. Feel free to use it, or help me to improve.


[![npm version](https://badge.fury.io/js/w-design.svg)](https://badge.fury.io/js/w-design)
[![Build Status](https://travis-ci.org/we-mak/w-design.svg?branch=master)](https://travis-ci.org/we-mak/w-design)
[![Coverage Status](https://coveralls.io/repos/github/we-mak/w-design/badge.svg?branch=master)](https://coveralls.io/github/we-mak/w-design?branch=master)

## Install

If use \`npm\`
`;

const Intro = () => {
  return (
    <div>
      <Typo appearance="h1">Introduction</Typo>
      <ReactMarkdown source={input1} />
      <Highlight className="sh">{"npm install --save w-design styled-components"}</Highlight>
      or for yarn
      <Highlight className="sh">{"yarn add w-design"}</Highlight>
    </div>
  );
};

export default Intro;
