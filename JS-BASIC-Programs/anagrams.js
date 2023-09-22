// function anagram(str1, str2) {
//   charCount1 = [];
//   charCount2 = [];

//   for (let i = 0; i < str1.length; i++) {
//     charCount1[str1[i]]++;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     charCount2[str2[i]]--;
//   }

//   for (let i in charCount1) {
//     if (charCount1[i] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagram("listen", "silent")); // true
// console.log(anagram("hello", "world")); // false

function isAnagram(str1, str2) {
  // Create two arrays to store the characters of each string.
  charCount1 = [];
  charCount2 = [];

  // Iterate over the characters of the first string.
  for (let i = 0; i < str1.length; i++) {
    // Add the character to the first array.
    charCount1[str1[i]]++;
  }

  // Iterate over the characters of the second string.
  for (let i = 0; i < str2.length; i++) {
    // Decrement the count of the character in the first array.
    charCount1[str2[i]]--;
  }

  // Check if all the counts in the first array are 0.
  for (let i in charCount1) {
    if (charCount1[i] !== 0) {
      return false;
    }
  }

  return true;
}

// Test the function.
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
