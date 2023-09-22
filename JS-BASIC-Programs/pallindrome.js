// Method: 1

function isPalindrome(number) {
  var reversedNumber = 0;
  var originalNumber = number;

  while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return originalNumber === reversedNumber;
}
var number = 323;
var isPalindrome = isPalindrome(number);

if (isPalindrome) {
  console.log("The number " + number + " is a palindrome.");
} else {
  console.log("The number " + number + " is not a palindrome.");
}

// Method: 2
function palindrome(number) {
  const convertNum = number.toString();
  const reverseString = convertNum.split("").reverse().join("");
  return convertNum === reverseString;
}

const num = 121;
if (palindrome(num)) {
  console.log("Pallindrome");
} else {
  console.log("Not Pallindrome");
}
