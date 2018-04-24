import fixSize from "./fixSize";

test("return right result", () => {
  expect(fixSize("xlarge")()).toBe("1296px");
  expect(fixSize("large")()).toBe("976px");
  expect(fixSize("medium")()).toBe("856px");
  expect(fixSize("small")()).toBe("616px");
  expect(fixSize("xsmall")()).toBe("496px");
});
