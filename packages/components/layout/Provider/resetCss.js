"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../../../common/colors");
var ResetCss = "\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 20px;\n  line-height: 1.5;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  background: " + colors_1.colors.WHITE + ";\n  color: " + colors_1.colors.N60 + ";\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica, \"Helvetica Neue\", system-ui, sans-serif;\n  font-size: 0.8rem;\n  overflow-x: hidden;\n  text-rendering: optimizeLegibility;\n}\n\na {\n  font-family: Helvetica, \"Helvetica Neue\", system-ui, sans-serif;\n}\n\n";
exports.default = ResetCss;
//# sourceMappingURL=resetCss.js.map