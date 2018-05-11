import hex2Rgba from "./hex2Rgba";

test("return right result", () => {
  expect(hex2Rgba("#4a4a4a", 0.5)).toBe("rgba(74, 74, 74, 0.5)");
  expect(hex2Rgba("#4a4a4a")).toBe("rgba(74, 74, 74)");
});
