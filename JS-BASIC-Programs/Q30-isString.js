// Write a JavaScript function to check 
// whether an 'input' is a string or not.

function isString(str){
    return typeof str === 'string';
}

const exampleString = 'Sourabh';
const exampleInteger = 123;

console.log(isString(exampleString));
console.log(isString(exampleInteger));