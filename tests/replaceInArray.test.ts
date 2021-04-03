import { replaceInArray } from "../src/replaceInArray";

describe("replaceInArray", () => {
  
  test("replace in 1D array", () => {
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

//   test("replace in 1D array", () => {
//     const inp = 0;
//     expect(() => replaceInArray(inp, 2, 6)).toThrow('Argument arr must be of type Array');
//   });

});
