import { randomProperty, getValFromObjKey } from "../";

const testObject = {
  foo: "lorem",
  bar: "ipsum",
  baz: "dolor"
};

describe("object", () => {
  // only need to check radom value picked up from object
  test("randomProperty", () => {
    expect(randomProperty(testObject)).toMatchSnapshot();
  });

  test("getValFromObjKey", () => {
    expect(getValFromObjKey("bar", testObject)).toBe("ipsum");
  });
});
