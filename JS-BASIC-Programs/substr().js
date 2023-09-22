// The substr method extracts a substring from a string:
function firstWord(inputString) {
  const firstSpaceIndex = inputString.indexOf(" ");

  if (firstSpaceIndex === -1) {
    return inputString;
  }

  const firstWord = inputString.substring(0, firstSpaceIndex);

  return firstWord;
}

let result = firstWord("see and stop");
console.log(result);
