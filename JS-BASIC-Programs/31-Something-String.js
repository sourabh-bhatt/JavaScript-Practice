// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

function giveMeSomething(a){
    return (`"something ${a}"`)
}

console.log(giveMeSomething('is better than nothing'));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething('something'));

// Or

function giveMeSomething2(a2){
    const result = "something " + a2;
    return result;
}

console.log(giveMeSomething2("is better than nothing")); 
console.log(giveMeSomething2("Bob Jane")); 
console.log(giveMeSomething2("something")); 