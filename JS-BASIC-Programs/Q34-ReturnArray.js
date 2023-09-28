// Write a program which return the array expect first index value

function drop(arr, val = 1) {
	return arr.slice(val)
}

const originalArray = [1, 2, 3, 4, 5];

// Drops the first element (default)
const result1 = drop(originalArray); 
console.log(result1); 

// Drops the first two elements
const result2 = drop(originalArray, 2); 
console.log(result2);

// Using slice to extract a portion of an array and returning a new array

// array.slice(startIndex, endIndex);

