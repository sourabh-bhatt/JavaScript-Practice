// To get a character from a string at a specified index, use the charAt(index) method:
function shortcut(str1, str2) {
  return str1.charAt(0) + str2.charAt(0);
}

let strings = ["Sourabh", "Bhatt"];
let result = shortcut(strings[0], strings[1]);
console.log(result);
