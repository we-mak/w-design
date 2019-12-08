import {
  randomProperty,
  getValFromObjKey,
  filterObject,
  firstLetter,
  removeAccentMarks
} from "../lib";
import { setUid } from "../src";

const testObject = {
  foo: "lorem",
  bar: "ipsum",
  baz: "dolor"
};

describe("object helper tests", () => {
  test("randomProperty should get the radom value from object", () => {
    expect(randomProperty(testObject)).toMatchSnapshot();
  });

  test("getValFromObjKey should get the correct value from key", () => {
    expect(getValFromObjKey("bar", testObject)).toBe("ipsum");
  });

  test("filterObject should filter out the object by keys", () => {
    expect(filterObject(testObject, ["bar"])).toMatchObject({
      foo: "lorem",
      baz: "dolor"
    });
  });
});

describe("string helper tests", () => {
  test("firstLetter should get the first letter from string", () => {
    expect(firstLetter("Lorem Ipsum")).toBe("LI");
  });

  test("removeAccentMarks remove accent marks for Latin characters", () => {
    expect(removeAccentMarks("latté đa ô đê")).toBe("latte da o de");
  });

  test("setUid set an unique string", () => {
    expect(setUid("somename")).toMatchSnapshot();
  });
});
