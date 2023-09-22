// Method : 1

/*

let ch = "w";
function vowelConsonant(ch) {
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log("The given character is a vowel and the character is: ", ch);
  } else {
    console.log(
      "The given character is a consonant and the character is: ",
      ch
    );
  }
}

vowelConsonant(ch);

*/

// Method: 2

/*

function vowelOrConsonant(char) {
  var vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}

var char = prompt("Enter a character");

if (vowelOrConsonant(char)) {
  console.log("The character is a vowel");
} else {
  console.log("The character is a consonant");
}

vowelOrConsonant(char);

*/

// Method: 3
// console.log() Gives an undefined output of the statement, avoid using it
/*
function vowelConsonant(ch) {
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    // console.log("The given character is a vowel and the character is: ", ch);
    return ch + ": is a vowel";
  } else {
    // console.log("The given character is a consonant and the character is: ", ch);
    return ch + ": is a consonant";
  }
}

const check = "a";
const result = vowelConsonant(check);
console.log(result);

*/

// Method: 4
/*

let ch = ["a", "e", "i", "o", "u"];
let vow = "p";
function vowelConsonant(vow) { //Argument to be passed which is in updating nature everytime forever --/
  if (ch.includes(vow)) {
    console.log("VOWEL");
  } else {
    console.log("CONSONANT");
  }
}

vowelConsonant(vow);

*/

// Method: 5
// This method is used by converting the neccessary checking item into lowercase.

/*

let ch = prompt("Enter the character to be checked:");
let updtCh = ch.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

function vowelConsonant(ch) {
  if (vowels.includes(ch)) {
    // console.log("This is vowel: ", ch); //Output with undefined variable
    return ch + ": is a vowel";
  } else {
    // console.log("This is consonant: ", ch);
    return ch + ": is a consonant";
  }
}

// vowelConsonant(updtCh);
const char = vowelConsonant(updtCh);
console.log(char);

*/

// Method: 6

let ch;
ch = prompt("Enter a character");
ch = ch.toUpperCase();

if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
  alert(ch + " is a vowel");
} else if (ch >= "A" && ch <= "Z") {
  alert(ch + " is a consonant");
} else {
  alert(ch + " is neither vowel nor consonant");
}
