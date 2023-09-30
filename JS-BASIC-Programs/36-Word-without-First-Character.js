// Word without First Character
// Create a function that takes a word and returns the new word 
// without including the first character.

function newWord(word){
    if(word.length >= 2){
        return word.slice(1);
    }
    else{
        return "";
    }
}

console.log(newWord('SSourabh'));