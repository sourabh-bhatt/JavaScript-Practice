// Create a function that returns the opposite of the given boolean, as a number.

// function flipBoolean(b){
//     if(b === 1 || b === true){
//         return 0
//     }
//     else{
//         return 1
//     }
// }

// console.log(flipBoolean(true));
// console.log(flipBoolean(false));
// console.log(flipBoolean(1));
// console.log(flipBoolean(0));

// Method 2
// Using ternary operator

const flipBoolean = (b) => (b === 1 || b === true)? 0: 1;

console.log(flipBoolean(true));
console.log(flipBoolean(false));
console.log(flipBoolean(1));
console.log(flipBoolean(0));
