// JavaScript Program to Check the Number of Occurrences of a Character in the String

function stringOccurrence(str, char){
    let count = 0;
    
    for(let i = 0; i<str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
    return count++;
}

const exampleString = 'Sourabh is a good programmer';
const checkString = 'o';
console.log(stringOccurrence(exampleString,checkString));