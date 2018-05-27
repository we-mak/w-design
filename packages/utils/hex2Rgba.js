"use strict";
/**
 * credit https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/#answer-11508164
 */
Object.defineProperty(exports, "__esModule", { value: true });
var hex2Rgba = function (hex, alpha) {
    hex = hex.replace("#", "");
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
    else {
        return "rgba(" + r + ", " + g + ", " + b + ")";
    }
};
exports.default = hex2Rgba;
//# sourceMappingURL=hex2Rgba.js.map