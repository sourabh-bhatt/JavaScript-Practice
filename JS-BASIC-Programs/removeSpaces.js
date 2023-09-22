function removeSpaces(str) {
  let space = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      space += str[i];
    }
  }
  return space;
}

const sampleString = "Sourabh-  is  -a           - good - programmer.";
const result = removeSpaces(sampleString);
console.log(result);
