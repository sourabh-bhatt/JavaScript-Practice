function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (const char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

const word = "Lol Lmao XD o:)";
const pureword = removeVowels(word);
console.log(pureword);
