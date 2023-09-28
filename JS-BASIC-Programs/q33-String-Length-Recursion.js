// Write a function that returns the length of a string. Make your function recursive.

function stringLength(str){
    if(str.length == 0){
        return 0
    }
    else{
        return + 1 + stringLength(str.slice(1))
    }
}

const exampleString = "Sourabh";
const result = stringLength(exampleString)
console.log(result);