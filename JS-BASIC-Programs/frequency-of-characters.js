// function strCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     count += 1;
//   }
//   return count;
// }

// const sampleString = "Sourabh";
// const result = strCount(sampleString);
// console.log(result);

// Frequency of characters in a string

function frequencyCount(str) {
  const frequency = {};

  for (let char of str) {
    if (char in frequency) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

const sampleString = "Sourabh is a good boy";
const result = frequencyCount(sampleString);
console.log(result);

// In this program the function frequencyCount is counting the number of times a character is occuring in the string.
// For this I created an object frequency in which the frequency of each character will be stored in key and value pair format.
// In this I used for-of loop, for the object which iterate over the entire string                      .
// If a char in frequency is present, it increases its frequncy by 1 and if only occurs one time, it just stored that number. It initializes the non updating characters frequency to 1.
