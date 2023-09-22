// Method 1 for sorting

function sort(str) {
  const char = str.split("");
  char.sort();
  const sortedChar = char.join("");
  return sortedChar;
}

const lol = "lol lmao xd";
const result = sort(lol);
console.log(result);

// Method 2 for sorting

function sorting(lol) {
  return [...lol].sort().join("");
}

const lola = "dcba";
const result2 = sort(lola);
console.log(result2);
