function zerosToOne(number) {
  const numStr = number.toString();

  let result = "";

  // for (let i = 0; i < numStr.length; i++) {
  //   if (numStr[i] === "1") {
  //     result += "0";
  //   } else {
  //     result += numStr[i];
  //   }
  // }

  for (let char of numStr) {
    if (char === "0") {
      result += "1";
    } else {
      result += char;
    }
  }

  const replacedNumber = parseInt(result, 10);
  return replacedNumber;
}

const checkNum = 10000809111;
const final = zerosToOne(checkNum);
console.log(`Original Number: ${checkNum}`);
console.log(`Number with One: ${final}`);
