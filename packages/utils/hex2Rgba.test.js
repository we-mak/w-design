"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hex2Rgba_1 = require("./hex2Rgba");
test("return right result", function () {
    expect(hex2Rgba_1.default("#4a4a4a", 0.5)).toBe("rgba(74, 74, 74, 0.5)");
    expect(hex2Rgba_1.default("#4a4a4a")).toBe("rgba(74, 74, 74)");
});
//# sourceMappingURL=hex2Rgba.test.js.map