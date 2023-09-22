// Iterative approach

// function sumOfDigit(number) {
//   let sum = 0;

//   while (number > 0) {
//     const digit = number % 10;
//     sum += digit;
//     number = Math.floor(number / 10);
//   }
//   return sum;
// }

// const digit = 12;
// const result = sumOfDigit(digit);
// console.log(`Iterative: ${result}`);

// Recursive Approach

function sumOfRecur(number) {
  if (number < 10) {
    return number;
  } else {
    return (number % 10) + sumOfRecur(Math.floor(number / 10));
  }
}

const digits2 = 1234;
co;
const result2 = sumOfRecur(digits2);
console.log(`Recursive: ${result2}`);
