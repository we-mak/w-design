"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fixSize_1 = require("./fixSize");
test("return right result", function () {
    expect(fixSize_1.default("xl")()).toBe("1296px");
    expect(fixSize_1.default("lg")()).toBe("976px");
    expect(fixSize_1.default("md")()).toBe("856px");
    expect(fixSize_1.default("sm")()).toBe("616px");
    expect(fixSize_1.default("xs")()).toBe("496px");
});
//# sourceMappingURL=fixSize.test.js.map