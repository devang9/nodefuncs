import { replaceInArray } from "../src/replaceInArray";

describe("replaceInArray", () => {
  test("replace in simple array", () => {
    const inpArr = [1, 2, 3];
    const replacedArray = replaceInArray(inpArr, 2, 6);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).toEqual(expect.arrayContaining([1, 6, 3]));
  });

  test("value does not exist in inp array", () => {
    const inpArr = [1, 2, 3];
    const replacedArray = replaceInArray(inpArr, 0, 6);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).not.toContain(6);
    expect(replacedArray).toEqual(expect.arrayContaining(inpArr));
  });

  test("null array", () => {
    const inpArr = [];
    const replacedArray = replaceInArray(inpArr, 0, 6);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).toEqual(expect.arrayContaining(inpArr));
  });

  test("nested array", () => {
    const inpArr = [1, [4, 2, 3], 2];
    const replacedArray = replaceInArray(inpArr, 2, 6);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).toEqual(expect.arrayContaining([1, [4, 6, 3], 6]));
  });

  test("nested array with fixed depth", () => {
    const inpArr = [1, [4, 2, 3, [7, 2, [5, 6, 2]]], 2];
    const replacedArray = replaceInArray(inpArr, 2, 6, 2);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).toEqual(
      expect.arrayContaining([1, [4, 6, 3, [7, 6, [5, 6, 2]]], 6])
    );
  });

  test("nested array with -ve depth", () => {
    const inpArr = [1, [4, 2, 3, [7, 2, [5, 6, 2]]], 2];
    const replacedArray = replaceInArray(inpArr, 2, 6, -1);
    expect(replacedArray).toBeInstanceOf(Array);
    expect(replacedArray).toHaveLength(inpArr.length);
    expect(replacedArray).toEqual(expect.arrayContaining(inpArr));
  });

  test("wrong datatype", () => {
    const inp: any = 0;
    expect(() => replaceInArray(inp, 2, 6)).toThrow(TypeError);
    expect(() => replaceInArray(inp, 2, 6)).toThrow(
      "Argument arr must be of type Array"
    );
  });
});
