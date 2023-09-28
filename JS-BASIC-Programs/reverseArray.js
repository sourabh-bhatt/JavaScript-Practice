// Executing array reverse without using reverse function 

function arrayReverse(arr){
  let reversedArrray = []

  for(let i = arr.length - 1; i >= 0; i--){
    reversedArrray.push(arr[i])
  }

  return reversedArrray;
}

console.log(arrayReverse([1,2,3,4,5]));