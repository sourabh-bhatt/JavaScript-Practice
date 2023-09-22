// Sum of N Natural numebers
// Without recursion

/*

function sumof(n) {
  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const number = 2;
const result = sumof(number);
console.log(`The sum of the first ${number} natural numbers is: ${result}`);

*/

// With recursion

function sumOfN(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumOfN(n - 1); //Adds till down to 1; eg: 5 = 5+4+3+2+1 --recursive
  }
}

const number = 5;
const result = sumOfN(number);
console.log(`The sum of the first ${number} natural numbers is: ${result}`);
n = 5;

n(n + 1) / 2;
