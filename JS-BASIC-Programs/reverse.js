// Iterative approaach

function reverseNum(number) {
  let reversed = 0;

  while (number) {
    const lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
  return reversed;
}

const digit = 123;
const result = reverseNum(digit);
console.log(`The reversed number of ${digit} is ${result}`);

// Recursive Approach

function reverseNumRec(n, reversed = 0) {
  if (n === 0) {
    return reversed;
  } else {
    const lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
    return reverseNumRec(n, reversed);
  }
}

const digit2 = 345;
const result2 = reverseNumRec(digit2);
console.log(`The reversed number using recursion of ${digit2} is ${result2}`);
