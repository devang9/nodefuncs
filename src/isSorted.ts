export function isSorted(
    arr: Array<any>,
    order?: number, // 1 = ascending check, other all = descending check
    compareFunction?: Function // function for compare logic, else defaultCompareFunction will be used
): boolean {
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument arr must be of type Array');
    }
    let typeSet = new Set(arr.map(x => typeof x));
    if (typeSet.size !== 1) {
        throw new TypeError('Array must contain similar type of elements');
    }
    let iterator = typeSet.values();
    if (iterator.next().value === "object" && !compareFunction) {
        throw new TypeError('Compare function must be provided if array contains objects');
    }
    if (compareFunction && !(typeof compareFunction === 'function')) {
        throw new TypeError('Argument compareFunction must be of type Function');
    }
    if (!order) { // if order is not provided, set it to ascending by default
        order = 1;
    }
    let O = Object(arr);
    let len = O.length >>> 0;
    let checker; // compareFunction
    if (compareFunction) {
        checker = compareFunction;
    }
    else {
        checker = defaultCompareFunction;
    }
    if (order === 1) {
        for (let k = 0; k < len - 1; k++) {
            if (checker(O[k], O[k + 1]) > 0) {
                return false;
            }
        }
    }
    else {
        for (let k = 0; k < len - 1; k++) {
            if (checker(O[k], O[k + 1]) < 0) {
                return false;
            }
        }
    }

    return true;
}

function defaultCompareFunction(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

