"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fixSize = function (size) {
    var sizes = {
        xl: function () {
            return "1296px";
        },
        lg: function () {
            return "976px";
        },
        md: function () {
            return "856px";
        },
        sm: function () {
            return "616px";
        },
        xs: function () {
            return "496px";
        }
    };
    return sizes[size];
};
exports.default = fixSize;
//# sourceMappingURL=fixSize.js.map