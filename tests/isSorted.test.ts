import { isSorted } from '../src/isSorted'

describe("isSorted", () => {
    test("Data type", () => {
        const inpArr: any = 2;
        expect(() => isSorted(inpArr)).toThrow(TypeError);
        expect(() => isSorted(inpArr)).toThrow(
            "Argument arr must be of type Array"
        );
    });
    test("Check sorted ascending", () => {
        const inpArr = [1, 2, 3];
        const output = isSorted(inpArr);
        expect(output).toBeTruthy();
    });
    test("Check sorted descending", () => {
        const inpArr = [1, 2, 3];
        const output = isSorted(inpArr, false);
        expect(output).toBeFalsy();
    });
    test("Check sorted descending", () => {
        const inpArr = [3, 2, 1];
        const output = isSorted(inpArr, false);
        expect(output).toBeTruthy();
    });

    test("Homogenity", () => {
        const inpArr = [2, "str", 5];
        expect(() => isSorted(inpArr)).toThrow(TypeError);
        expect(() => isSorted(inpArr)).toThrow(
            "Array must contain similar type of elements"
        );
    });
    test("Check if compare function is given", () => {
        const inpArr = [{ a: 5, b: 6 }, { a: 7, b: 2 }];
        expect(() => isSorted(inpArr)).toThrow(TypeError);
        expect(() => isSorted(inpArr)).toThrow(
            "Compare function must be provided if array contains objects"
        );
    });
    test("Check compare function type", () => {
        const inpArr = [{ a: 5, b: 6 }, { a: 7, b: 2 }];
        const compareFn: any = true;
        expect(() => isSorted(inpArr, true, compareFn)).toThrow(TypeError);
        expect(() => isSorted(inpArr, true, compareFn)).toThrow(
            "Argument compareFunction must be of type Function"
        );
    });
    test("Compare objects", () => {
        const inpArr = [{ a: 5, b: 6 }, { a: 7, b: 2 }];
        const compareFn = (arg1, arg2) => {
            if (arg1.a < arg2.a) {
                return -1;
            }
            if (arg1.a > arg2.a) {
                return 1;
            }
            return 0;
        }
        const output = isSorted(inpArr, true, compareFn);
        expect(output).toBeTruthy();
    });
    test("Compare objects", () => {
        const inpArr = [{ a: 8, b: 6 }, { a: 7, b: 2 }];
        const compareFn = (arg1, arg2) => {
            if (arg1.a < arg2.a) {
                return -1;
            }
            if (arg1.a > arg2.a) {
                return 1;
            }
            return 0;
        }
        const output = isSorted(inpArr, true, compareFn);
        expect(output).toBeFalsy();
    });
});
