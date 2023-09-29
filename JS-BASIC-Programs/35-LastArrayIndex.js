// Write a program to access the last index of an array

// Method 1

// function lastIndexOfArray(arr){
//     return arr.pop()
// }

// console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));

// Method 2

// function lastIndexOfArray(arr){
//     return arr[arr.length - 1]
// }

// console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));

// Method 3 - Using slice

// function lastIndexOfArray(arr){
//     return arr.slice(-1)[0]
// }

// console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));

// Method 4 - Using for loop

// function lastIndexOfArray(arr){
//     let lastArry;

//     for(let i=0; i<arr.length; i++){
//         lastArry = arr[i]
//     }

//     return lastArry
// }

// console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));

// Method 5

// function lastIndexOfArray(arr){
    // Without using length function

    // let lastArry;

//     for(let i=0; ;i++){
//         if(arr[i] === undefined){
//             return lastArry;
//         }
//         lastArry = arr[i]
//     }
// }

// console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));


// Method 6

function lastIndexOfArray(arr){
    // Without using length function - 2

    let lastArry;

    for(const item of arr){
        lastArry = item;
    }
    
    return lastArry
}

console.log(lastIndexOfArray([1,2,3,4,"This is the last index element"]));