import { findInObjectorIterable } from '../src/findInObjectorIterable'

describe("findInObjectorIterable", () => {
    test("Check if input is proper", () => {
        const inpObj = 2;
        expect(() => findInObjectorIterable(inpObj, 2)).toThrow(TypeError);
        expect(() => findInObjectorIterable(inpObj, 2)).toThrow(
            "Argument complexObj must be of type object or string"
        );
    });
    test("Check if item is present in array", () => {
        const inpObj = [1, 2, 3];
        const output = findInObjectorIterable(inpObj, 2);
        expect(output).toBeTruthy();
    });
    test("Check if item is present in substring", () => {
        const inpObj = "123";
        const output = findInObjectorIterable(inpObj, 2, true);
        expect(output).toBeTruthy();
    });
    test("Check if substring check doesnt happen without third argument", () => {
        const inpObj = "123";
        const output = findInObjectorIterable(inpObj, 2);
        expect(output).toBeFalsy();
    });
    test("Check nested object", () => {
        const inpObj = [[1, 5], [[1, 7], [9, 2, 3]]];
        const output = findInObjectorIterable(inpObj, 2);
        expect(output).toBeTruthy();
    });
    test("Check nested object with substring", () => {
        const inpObj = [[1, "abc"], [[1, "dev"], [9, 2, 3]]];
        const output = findInObjectorIterable(inpObj, "d", true);
        expect(output).toBeTruthy();
    });
});