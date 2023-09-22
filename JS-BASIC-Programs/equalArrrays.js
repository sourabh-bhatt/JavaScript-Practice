function sameArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 3, 4];
const a3 = [1, 2, 3];

console.log(sameArr(a1, a2));
console.log(sameArr(a1, a3));
