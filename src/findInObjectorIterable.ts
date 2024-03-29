export function findInObjectorIterable(
    complexObj: Object,
    toFind: string | number,
    checkforSubstring: boolean = false
): boolean {
    if (!(typeof complexObj === 'object' || typeof complexObj === 'string')) {
        throw new TypeError('Argument complexObj must be of type object or string');
    }
    for (const key of Object.keys(complexObj)) {
        let currentItem = complexObj[key];
        if (typeof currentItem === "object") {
            if (findInObjectorIterable(currentItem, toFind, checkforSubstring)) {
                return true;
            }
        }
        else {
            if (currentItem === toFind || (typeof currentItem === "string" && checkforSubstring && currentItem.indexOf(toFind.toString()) !== -1)) {
                return true;
            }
        }
    }
    return false;
}
//Testing
//console.log(findInObjectorIterable({ name: "dev" }, "dev"));
