// To determine the first occurrence of a string within another string, use the indexOf method:

function indexOfIgnoreCase(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  return lowerStr1.indexOf(lowerStr2);
}

console.log(indexOfIgnoreCase("bit", "it"));
console.log(indexOfIgnoreCase("bit", "IT"));
console.log(indexOfIgnoreCase("Hello", "world"));
