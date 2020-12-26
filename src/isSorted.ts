export function isSorted(
    arr: Array<any>,
    isAscending: boolean = true,
    compareFunction?: (arg1, arg2) => number // function for compare logic, else defaultCompareFunction will be used
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
    let O = Object(arr);
    let len = O.length >>> 0;
    let checker; // compareFunction
    if (compareFunction) {
        checker = compareFunction;
    }
    else {
        checker = defaultCompareFunction;
    }
    if (isAscending) {
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

function defaultCompareFunction(a, b): number {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

//Testing
// console.log(isSorted([2, 3, 4], true, function (a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// }))
