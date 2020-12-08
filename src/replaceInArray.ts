export function replaceInArray(
  arr: Array<any>,
  oldVal,
  newVal,
  depth: number = +Infinity
): Array<any> {
  if (!Array.isArray(arr)) {
    throw new TypeError('Argument arr must be of type Array');
  }
  if (depth < 0) {
    return arr;
  }
  let O = Object(arr);
  let len = O.length >>> 0;
  let A: Array<any> = new Array(len);
  let k = 0;
  for (let k = 0; k < len; k++) {
    if (k in O) {
      let kValue = O[k];
      if (Array.isArray(kValue)) {
        A[k] = replaceInArray(kValue, oldVal, newVal, depth - 1);
      } else {
        if (kValue === oldVal) {
          kValue = newVal;
        }
        A[k] = kValue;
      }
    }
  }
  return A;
}
