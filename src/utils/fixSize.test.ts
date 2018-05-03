import fixSize from "./fixSize";

test("return right result", () => {
  expect(fixSize("xl")()).toBe("1296px");
  expect(fixSize("lg")()).toBe("976px");
  expect(fixSize("md")()).toBe("856px");
  expect(fixSize("sm")()).toBe("616px");
  expect(fixSize("xs")()).toBe("496px");
});
