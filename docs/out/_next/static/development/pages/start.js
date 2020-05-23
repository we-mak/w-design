(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/start.js"],{

/***/ "../node_modules/react/index.js":
/*!********************************************************************************************!*\
  !*** delegated ../node_modules/react/index.js from dll-reference dll_7c1cbbe9cdb74cc8ed4a ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_7c1cbbe9cdb74cc8ed4a */ "dll-reference dll_7c1cbbe9cdb74cc8ed4a"))("../node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/index.es.js ***!
  \*****************************************************/
/*! exports provided: MDXContext, MDXProvider, useMDXComponents, withMDXComponents, mdx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isFunction = function (obj) { return typeof obj === 'function'; };

var MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function (Component) { return function (props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( Component, Object.assign({}, props, { components: allComponents }));
}; };
var useMDXComponents = function (components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : Object.assign({}, contextComponents,
      components);
  }

  return allComponents;
};
var MDXProvider = function (props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( MDXContext.Provider, { value: allComponents },
      props.children
    );
};

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function (ref) {
    var children = ref.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
}
};
var MDXCreateElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var propComponents = props.components;
  var mdxType = props.mdxType;
  var originalType = props.originalType;
  var parentName = props.parentName;
  var rest = objectWithoutProperties( props, ["components", "mdxType", "originalType", "parentName"] );
  var etc = rest;
  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components[(parentName + "." + type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, {ref: ref},
      etc,
      {components: propComponents}));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, {ref: ref},
    etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstart&absolutePagePath=%2FUsers%2Fsondang%2FDocuments%2Fwemak%2Fw-design%2Fdocs%2Fpages%2Fstart.mdx!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstart&absolutePagePath=%2FUsers%2Fsondang%2FDocuments%2Fwemak%2Fw-design%2Fdocs%2Fpages%2Fstart.mdx ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/start", function() {
      var mod = __webpack_require__(/*! ./pages/start.mdx */ "./pages/start.mdx")
      if(true) {
        module.hot.accept(/*! ./pages/start.mdx */ "./pages/start.mdx", function() {
          if(!next.router.components["/start"]) return
          var updatedPage = __webpack_require__(/*! ./pages/start.mdx */ "./pages/start.mdx")
          next.router.update("/start", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./pages/start.mdx":
/*!*************************!*\
  !*** ./pages/start.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var _jsxFileName = "/Users/sondang/Documents/wemak/w-design/docs/pages/start.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Getting start"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Install"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "@w-design/core"), " is the main core package of W-design kit, most of the required components are in this package."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "You can start with"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "\nnpm install --save @w-design/core styled-components\n# or\nyarn add @w-design/core styled-components\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Prerequisite: Provider component"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "All of the package need ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Provider")), " to pass theme object to all the components,\nso you must have ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Provider"), " on the top of your App."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), "import { Provider, Container } from \"@w-design/core\";\n\nReactDOM.render(\n  <Provider>\n    <Container> Lorem ipsum </Container>\n  </Provider>,\n  mountNode\n);\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Theme provider is based on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.styled-components.com/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "styled-components"), " and making theme with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "http://jxnblk.com/styled-system/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "styled-system")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Provider provides theme for your layout, you can supply your theme by insert your theme object by ", "`", "theme", "`", " props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Default theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "{\n  theme: {\n    fonts: {\n      normal: \"Helvetica, Arial, sans-serif\",\n      medium: \"Helvetica, Arial, sans-serif\",\n      demiBold: \"Helvetica, Arial, sans-serif\"\n    },\n    fontSizes: [ \"0.7rem\", \"0.8rem\", \"0.9rem\",\"1rem\",\"1.2rem\",\"1.4rem\",\"1.6rem\",\"1.8rem\",\"2rem\"],\n    fontWeights: {\n      normal: 400,\n      strong: 500,\n      bold: 700,\n      xbold: 900\n    },\n    lineHeights: [1, 1.125, 1.25, 1.5],\n    space: [0, 4, 8, 16, 32, 64, 128],\n    breakpoints: [\"24em\",\"32em\",\"48em\",\"64em\",\"80em\"],\n    radii: [\"0rem\", \"0.1rem\", \"0.2rem\", \"0.3rem\", \"0.4rem\"],\n    letterSpacings: { normal: \"normal\", caps: \"0.25rem\" },\n    shadows: [\n      \"none\",\n      `inset 0 0 0 1px rgba(87, 85, 217, .2), 0 0 4px rgba(87, 85, 217, .2)`,\n      `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`,\n      `0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)`,\n      `0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)`,\n      `0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)`,\n      `0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)`,\n      `0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)`\n    ],\n    colors: {\n      TRANSPARENT: \"transparent\",\n      // Black\n      BLACK: \"#000\",\n      // White\n      WHITE: \"#FFF\",\n      // Neutral\n      N90: \"#10161A\",\n      N80: \"#182026\",\n      N70: \"#202B33\",\n      N60: \"#293742\",\n      N50: \"#394B59\",\n      N40: \"#4D6171\",\n      N30: \"#566E82\",\n      N20: \"#60798E\",\n      N10: \"#6C869B\",\n      N9: \"#768FA4\",\n      N8: \"#87A0B5\",\n      N7: \"#90A9BF\",\n      N6: \"#9DB3C6\",\n      N5: \"#BECEDC\",\n      N4: \"#CED9E3\",\n      N3: \"#E2EAF2\",\n      N2: \"#EFF3F6\",\n      N1: \"#FBFBFB\",\n      // Primary\n      B70: \"#004660\",\n      B60: \"#007099\",\n      B50: \"#008CC0\", // Primary Color\n      B40: \"#009AD3\",\n      B30: \"#00A7E4\",\n      B20: \"#00B7FA\",\n      B10: \"#3ECBFF\",\n      B7: \"#7CDCFF\",\n      B5: \"#B1EAFF\",\n      B0: \"#daf5ff\",\n      // Red\n      R50: \"#B40404\",\n      R40: \"#C61515\",\n      R30: \"#DC1F1F\",\n      R20: \"#F22828\",\n      R10: \"#FF5252\",\n      R7: \"#FF8383\",\n      R5: \"#FFADAD\",\n      R0: \"#ffd7d7\",\n      // Orange\n      O50: \"#E15B00\",\n      O40: \"#EF8100\",\n      O30: \"#FA9B00\",\n      O20: \"#FFAC23\",\n      O10: \"#FFC40D\",\n      O7: \"#FFDA49\",\n      O5: \"#FFEA81\",\n      O0: \"#fff2d1\",\n      // Green\n      G50: \"#1D7324\",\n      G40: \"#238C2C\",\n      G30: \"#29A634\",\n      G20: \"#3BBC45\",\n      G10: \"#4DD257\",\n      G7: \"#55E560\",\n      G5: \"#74FD7F\",\n      G0: \"#e0ffe2\",\n      // Purple\n      P50: \"#403294\",\n      P40: \"#5243AA\",\n      P30: \"#6554C0\",\n      P20: \"#8777D9\",\n      P10: \"#998DD9\",\n      P7: \"#C0B6F2\",\n      P5: \"#EAE6FF\",\n      // Teal\n      T50: \"#008DA6\",\n      T40: \"#00A3BF\",\n      T30: \"#00B8D9\",\n      T20: \"#00C7E6\",\n      T10: \"#79E2F2\",\n      T7: \"#B3F5FF\",\n      T5: \"#E6FCFF\"\n    },\n    padding: {\n      sm: \"0.15rem 0.3rem\",\n      md: \"0.35rem 0.4rem\",\n      lg: \"0.45rem 0.6rem\"\n    },\n    height: {\n      sm: \"1.4rem\",\n      md: \"1.8rem\",\n      lg: \"2rem\"\n    }\n  }\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Wrap your app with Provider"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), "<Provider>\n  <App />\n</Provider>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Customize your theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "You can add custom them based on default theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), "<Provider\n  theme={{\n    fonts: \"Roboto, Helvetica, sans-serif\"\n  }}\n>\n  <App />\n</Provider>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Extends with theme properties"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "You even can use you own theme with other component which is passed styled-system Api."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "For example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), "<Container bg=\"N2\">...</Container>\n")));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 6:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fstart&absolutePagePath=%2FUsers%2Fsondang%2FDocuments%2Fwemak%2Fw-design%2Fdocs%2Fpages%2Fstart.mdx ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fstart&absolutePagePath=%2FUsers%2Fsondang%2FDocuments%2Fwemak%2Fw-design%2Fdocs%2Fpages%2Fstart.mdx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstart&absolutePagePath=%2FUsers%2Fsondang%2FDocuments%2Fwemak%2Fw-design%2Fdocs%2Fpages%2Fstart.mdx!./");


/***/ }),

/***/ "dll-reference dll_7c1cbbe9cdb74cc8ed4a":
/*!*******************************************!*\
  !*** external "dll_7c1cbbe9cdb74cc8ed4a" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_7c1cbbe9cdb74cc8ed4a;

/***/ })

},[[6,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=start.js.map